// GENERAL FUNCTIONS
function fetchText(path) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: path,
			type: "GET",
			dataType: "JSON"
		})
			.done((data) => resolve(data))
			.fail((jqXHR, error) => reject(new Error(error)));
	});
}

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// LANGUAGE FUNCTIONS

function translation(lang) {
	$.each(data_trans_texts, function (key, value) {
		$("[trans=" + key + "]").html(value[lang]);
	});
}

function links(lang) {
	$.each(data_trans_links, function (key, value) {
		$("a#" + key).attr("href", value[lang]["href"]).attr("alt", value[lang]["text"].replace(/<[^>]+>/g, " ")).attr("title", value[lang]["text"].replace(/<[^>]+>/g, " "));
		$("span[trans=" + key + "]").html(value[lang]["text"]);
	});
}

function transSpan(key) {
	return `<span trans='${key}'>${data_trans_texts[key][lang]}</span>`
}

function urllang(lang) {
	const url = new URL(location.href);
	url.searchParams.set('lang', lang);
	history.pushState({}, '', url);
}

// LOCALITY FUNCTIONS

function loclang(data_loc, lang) {
	$("#loc_name").html(data_loc["loc_name"][lang]);
	view();

}

/* ------------- INIT ------------- */

// Set global variables
var view_mod = "map";
var view_year = "1890";
var lang;
var loc;
var data_loc;
var data_trans_texts;
var data_trans_links;
var map;
var area;

$(document).ready(async function () {

	// Init variables
	var urlParams = new URLSearchParams(location.search);

	if (urlParams.get('lang')) {
		lang = urlParams.get('lang')
	} else {
		lang = "cs"
	};

	loc = urlParams.get('loc');

	// Fetch data
	var waitFetchData = await fetchText(`locs/${loc}.json`).then((data) => {
		data_loc = data
	});

	var waitFetchData = await fetchText('trans_texts.json').then((data) => {
		data_trans_texts = data
	});

	var waitFetchData = await fetchText('trans_links.json').then((data) => {
		data_trans_links = data
	});

	// CONSTRUCT INFOBOX ELEMENTS

	// INFOBOX 1 (Census information)

	// Timeline
	var years = ["1857", "1869", "1880", "1890", "1900", "1910", "1921", "1930"];
	years.forEach(function (year) {
		$("#timeline").append('<span class="pasiv" id="timeline' + year + '">' + year + '</span>');
		// TODO zkontrolovat, zda je daný rok v dané lokalitě zpracovaný
		$("#timeline" + year).on("click", function () {
			view_year = year;
			view();
		});
	});

	// Census info
	$("#info_census").append('<p><span trans="loc_box1_official"></span>: <span id="loc_box1_official_value"></span></p>');
	$("#info_census").append('<p><span trans="loc_box1_found"></span>: <span id="loc_box1_official_found"></span></p>');

	// View mode
	var views = ["map", "pers", "search_pers", "search_house"];
	views.forEach(function (v) {
		$("#view_mod").append('<span class="pasiv" id="view_' + v + '" trans="view_' + v + '"></span>');
		$("#view_" + v).on("click", function () {
			view_mod = v;
			view();
		});
	});

	// INFOBOX 2 (Sources)
	var sources = ["pers", "map"];
	sources.forEach(function (s) {
		$("#loc_box2_cont").append(`<p><b>${transSpan("loc_box2_" + s)}: </b><span id="loc_sources_${s}"></span></p>`);
	});

	// INFOBOX 4 (Download)
	$("#download").append(`<a href="locs/${loc}.json" download="${loc}.json">${transSpan("link_download")}</a> (<a id="link_cc" target="_blank"><span trans="link_cc"></span></a>)`)

	// Info unrelated to lang
	$('#loc_sources_pers').append(data_loc["loc_sources_pers"]);
	$('#loc_sources_map').append(data_loc["loc_sources_map"]);


	// Construct switch language
	$(document).on("click", ".flag", function () {
		lang = $(this).attr("alt")
		translation(lang);
		links(lang);
		urllang(lang);
		loclang(data_loc, lang);
	});

	// Remove wait icon
	$("#wait").remove();

	// Info related to lang
	loclang(data_loc, lang);
	translation(lang);
	links(lang);
	urllang(lang);
});



// SWITCH VIEW

function view(cpObec, cpCast, cpCp) {
	// Active/passive buttons in infobox 1
	$('.aktiv').removeClass('aktiv').addClass('pasiv');
	$(`#timeline${view_year}`).removeClass('pasiv').addClass('aktiv');
	$(`#view_${view_mod}`).removeClass('pasiv').addClass('aktiv');

	// Values in infobox 1
	var [ofic] = data_loc["operaty"].filter(oper => oper.rok === view_year);
	const dohlR = lang !== "en" ? ofic['dohlR'].replace(".", ",") : ofic['dohlR'];
	$("#loc_box1_official_value").text(ofic['ofic']);
	$("#loc_box1_official_found").text(`${ofic['dohlA']} (${dohlR} %)`);

	// Activate view_mod
	$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
	switch (view_mod) {
		case "map":
			view_map(view_year, cpObec, cpCast, cpCp);
			break;
		case "pers":
			view_pers();
			break;
		case "search_pers":
			search_pers();
			break;
		case "search_house":
			search_house();
			break;
	}
};

// SPARQL FUNCTION

var endpointUrl = 'https://query.wikidata.org/sparql';
function makeSPARQLQuery(endpointUrl, sparqlQuery, doneCallback) {
	var settings = {
		headers: { Accept: 'application/sparql-results+json' },
		data: { query: sparqlQuery }
	};
	return $.ajax(endpointUrl, settings).then(doneCallback);
};

// PERSON DETAILS INFOBOX

async function wd(q, arch) {

	// Search data about residence and name variants
	var osBydl = [];
	var osJmena = [];

	data_loc["obyv"].forEach(house => {
		house["obyv"].forEach(person => {
			if (person["arch"] == arch) {
				osBydl.push({
					"jm": person["jm"],
					"rok": house["rok"],
					"obec": house["obec"],
					"cast": house["cast"],
					"cp": house["cp"]
				});
			};
		});
	});

	// Process data
	osBydl.sort(function (a, b) { return (a.rok - b.rok) });
	var bydliste = "";
	osBydl.forEach(bydl => {
		bydliste += `<li>${bydl.rok}: ${linkCp(bydl.rok, bydl.obec, bydl.cast, bydl.cp)}</li>`;
		// Process names from census data
		if (!osJmena.some(jmeno => jmeno.match(escapeRegExp(bydl.jm)) || escapeRegExp(bydl.jm).match(jmeno))) {
			osJmena.push(bydl.jm);
		}
	});

	// Add name from "Arch"
	const archJm = arch.replace(/ \(.*/, "");
	if (!osJmena.some(jmeno => escapeRegExp(jmeno).match(archJm) || archJm.match(escapeRegExp(jmeno)))) {
		osJmena.push(archJm);
	}

	// WIKIDATA
	var wikidata1 = "";
	var wikidata2 = "";
	if (q) {
		// Basic personal information
		var sparqlQuery = `SELECT ?item ?itemLabel ?narkdy ?narkdeLabel ?zemkdy ?zemkdeLabel ?uk ?leg ?ww1 ?cea ?hol WHERE {
			  SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang},cs". }
              VALUES ?item { wd:${q} }
			  OPTIONAL {?item wdt:P569 ?narkdy}
			  OPTIONAL {?item wdt:P19 ?narkde}
			  OPTIONAL {?item p:P570/psv:P570 [wikibase:timePrecision 11; wikibase:timeValue ?zemkdy]}
			  OPTIONAL {?item wdt:P20 ?zemkde}
			  OPTIONAL {?item wdt:P8953 ?uk}
			  OPTIONAL {?item wdt:P9695 ?leg}
			  OPTIONAL {?item wdt:P11465 ?cea}
			  OPTIONAL {?item wdt:P9109 ?hol}
			}`;
		// TODO			"  OPTIONAL {?item wdt:P9109 ?ww1}\n" +

		var qData = await makeSPARQLQuery(endpointUrl, sparqlQuery);
		var qDataEd = qData.results.bindings[0] || {};
		const formatDate = dateStr => dateStr ? dateStr.replace(/-0/g, "-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, "$3. $2. $1") : "?";
		const narkdy = formatDate(qDataEd.narkdy?.value);
		const zemkdy = formatDate(qDataEd.zemkdy?.value);
		const narkde = qDataEd.narkdeLabel?.value || "?";
		const zemkde = qDataEd.zemkdeLabel?.value || "?";
		const udalosti = [];
		if (qDataEd.uk) udalosti.push(`<li><a href='http://is.cuni.cz/webapps/archiv/public/person/se/${qDataEd.uk.value}' target='_blank' rel='noopener'>${transSpan("cuni")}</a></li>`);
		if (qDataEd.leg) udalosti.push(`<li><a href='http://legie100.com/krev-legionare/${qDataEd.leg.value}' target='_blank' rel='noopener'>${transSpan("legie")}</a></li>`);
		if (qDataEd.ww1) udalosti.push(`<li><a href='https://www.vuapraha.cz/padli-1-svetova/${qDataEd.ww1.value}' target='_blank' rel='noopener'>${transSpan("ww1")}</a></li>`);
		if (qDataEd.cea) udalosti.push(`<li><a href='https://www.vuapraha.cz/cechoslovaci-v-zahranici/${qDataEd.cea.value}/' target='_blank' rel='noopener'>${transSpan("ww2")}</a></li>`);
		if (qDataEd.hol) udalosti.push(`<li><a href='https://www.holocaust.cz/cs/databaze-obeti/obet/${qDataEd.hol.value}/' target='_blank' rel='noopener'>${transSpan("holocaust")}</a></li>`);

		// Information abou transport
		const sparqlTrans = `SELECT ?item ?transOd ?transStartLabel ?transCilLabel WHERE {
            SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang}". }
            VALUES ?item { wd:${q} }
            ?item wdt:P793 ?trans.
            ?trans wdt:P580 ?transOd;
                   wdt:P1427 ?transStart;
                   wdt:P1444 ?transCil.
        } ORDER BY ?transOd`;

		const tData = await makeSPARQLQuery(endpointUrl, sparqlTrans);
		const tDataEd = tData.results.bindings;
		tDataEd.forEach(trans => {
			const transOd = formatDate(trans.transOd.value);
			const transStart = trans.transStartLabel.value;
			const transCil = trans.transCilLabel.value;
			udalosti.push(`<li>${transOd} ${transSpan("deport")}: ${transStart} → ${transCil}</li>`);
		});
		const ids = [`<li><a href='https://www.wikidata.org/wiki/${q}' target='_blank' rel='noopener'>Wikidata</a></li>`];
		// zobrazení informací
		wikidata1 = `<p><b>${narkdy}, ${narkde} – ${zemkdy}, ${zemkde}</b></p>`.replace("?, ?", "?");
		wikidata2 = `<h4>${transSpan("further_info")}:</h4><ul>${udalosti.join("")}</ul><h4>${transSpan("refs")}:</h4><ul>${ids.join("")}</ul>`;
	};

	$("#loc_box3_cont").empty();
	$("#loc_box3_cont").append(`<h3>${osJmena.join(" / ")} ${arch.replace(/.* \(/, "(").replace(/–xxx[0-9]/, "").replace(/\(([0-9]+)\)/, "(*$1)")}</h3>${wikidata1}<h4>${transSpan("residence")}:</h4><ul>${bydliste}</ul>${wikidata2}`);
};


// MOD MAPA

function view_map(rok, cpObec, cpCast, cpCp) {
	$("#view_list").replaceWith('<div id="map"></div>');

	// Initialize Leaflet map	
	map = L.map('map').setView(data_loc["mapCenter"], 16);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			attribution: '<a href="https://www.openhistoricalmap.org/copyright">OpenHistoricalMap</a>',
			maxZoom: 19,
			minZoom: 3,
			opacity: 0.15
		}).addTo(map);

	const filtrGeoJSON = data_loc["geoJSON"].features.filter(array =>
		(array.properties["start_date"] <= rok || typeof array.properties["start_date"] === "undefined") &&
		(array.properties["end_date"] > rok || typeof array.properties["end_date"] === "undefined")
	);

	// Layer: houses with Jewish inhabitants
	map.createPane("JewHouse");
	map.getPane("JewHouse").style.zIndex = 630;

	// Layer: selected house
	var focus;
	map.createPane("FocusHouse");
	map.getPane("FocusHouse").style.zIndex = 640;

	area = L.geoJson(filtrGeoJSON, {
		style: feature => {
			let style = {
				color: "gray",
				fillColor: "lightgray",
				fillOpacity: 0.8,
				weight: 0.5
			};
			if (typeof feature.properties["waterway"] !== "undefined") {
				style.color = "lightblue";
				style.fillColor = "lightblue";
				style.fillOpacity = 1;
				style.weight = 0.5;
			} else if (feature.properties["highway"] === "residential") {
				style.color = "gray";
				style.fillColor = "";
				style.fillOpacity = 1;
				style.weight = 1.5;
			}
			return style;
		},
		onEachFeature: function (feature, layer) {
			var tags = feature.properties;

			if (tags["addr:city"] && tags["addr:housenumber"]) {
				const obec = tags["addr:city"];
				const cp = tags["addr:housenumber"];
				const findCp = data_loc["obyv"].find(array =>
					array.rok === rok && array.obec === obec && array.cp === cp &&
					(!tags["addr:place"] || array.cast === tags["addr:place"])
				);

				if (findCp) {
					const pocetZidu = findCp.pocet;
					const vypisZidu = findCp.obyv.map(person =>
						`<br/><span class="link" onclick="wd('${person.q}', '${person.arch}')">${person.jm}</span>`
					).join('');

					let pop = `<center><b>${tags["addr:city"]}`;
					if (tags["addr:place"] && tags["addr:place"] !== "") { pop += `, ${tags["addr:place"]}` };
					pop += `, ${transSpan("cp")} ${cp}</b><br/>${transSpan("pop_Jewish_inhab")}: ${pocetZidu}</center>${vypisZidu}`;

					layer.bindPopup(pop);

					if (typeof pocetZidu !== "undefined") {
						const color = 100 - (100 * pocetZidu / data_loc["maxPocet"]);
						layer.setStyle({
							fillColor: `hsl(21,100%,${color}%)`,
							fillOpacity: 1,
							weight: 0.5,
							pane: "JewHouse"
						});
					}
				}
				// Highlight selected house
				if (!tags["addr:place"]) { tags["addr:place"] = "" };
				if (!cpCast) { cpCast = "" };
				if (tags["addr:city"] === cpObec && tags["addr:place"] === cpCast && tags["addr:housenumber"] === cpCp) {
					layer.setStyle({
						weight: 4,
						color: "hsl(197,100%,40%)",
						pane: "FocusHouse"
					});
					focus = layer.getBounds().getCenter();
				}
			}
		}
	}).addTo(map);
	if (typeof cpCp !== "undefined") { map.setView(focus, 17) };
};

// MOD PERSONS
function view_pers() {
	$('#view_list').empty()
	var filter_houses = data_loc["obyv"].filter(house => house["rok"] === view_year)
		.sort((a, b) => {
			if (a.obec !== b.obec) return a.obec.localeCompare(b.obec);
			if (a.cast !== b.cast) return a.cast.localeCompare(b.cast);
			const aCp = a.cp.replace(/–.*/, "").padStart(4, '0');
			const bCp = b.cp.replace(/–.*/, "").padStart(4, '0');
			return aCp.localeCompare(bCp);
		});
	if (filter_houses.length == 0) {
		$("#view_list").append(`<h2 style="text-align:center">${transSpan("without_data")}</h2>`);
	} else {
		$("#view_list").append(`<h2>${transSpan("loc_view_pers_head")} ${view_year}</h2><p align='center'></p><div id='list'></div>`);
		$("#list").append(filter_houses);
		filter_houses.forEach(house => {
			const personsSpan = house["obyv"]
				.map(person => `<span class="link" onclick="show_person(this,'${person["q"]}', '${person["arch"]}')">${person["jm"]}</span>`)
				.join(", ");
			$("#list").append(`<p><b>${linkCp(view_year, house["obec"], house["cast"], house["cp"])}:</b> ${personsSpan}</p>`);
		});
	}
};

// MOD SEARCH PERSONS
function search_pers() {
	$("#timeline .aktiv").removeClass('aktiv').addClass('pasiv');
	$("#view_list")
		.empty()
		.append(`<div><b>${transSpan("view_search_pers")}: </b><input type='text' id='input_search' placeholder='.*' autofocus /></div><div id='list'></div>`);
	$("#input_search").on("input", function () {
		var inputValue = $(this).val().toLowerCase();
		if (inputValue.length >= 1) {
			$("#list").empty();
			var foundPers = [];
			var foundPersID = new Set();

			const processPersFound = (person, year) => {
				if (person.jm.toLowerCase().match(inputValue)) {
					foundPers.push({
						"arch": person["arch"],
						"jm": person["jm"],
						"q": person["q"],
						"rok": year
					});
					foundPersID.add(person["arch"]);
				}
			}

			// find the name in census
			data_loc["obyv"].forEach(house => {
				house["obyv"].forEach(person => {
					processPersFound(person, house["rok"])
				});
			});
			// find the name in Wikidata labels
			data_loc["Qlabels"].forEach(label => {
				processPersFound(label, "1940")
			});

			foundPers.sort((a, b) => a.rok - b.rok);
			var listPers = Array.from(foundPersID).sort();

			listPers.forEach(personID => {
				var rec_full = $.grep(foundPers, p => p["arch"] === personID);
				var rec_name = personID.replace(/–xxx[0-9]/, "").replace(/\(([0-9]+)\)/, "(*$1)");
				var rec_show = `<span class="link" onclick="show_person(this, '${rec_full[0].q}', '${rec_full[0].arch}')">${rec_name}</span>`;
				$("#list").append(rec_show + '<br/>');
			});
		};
	});
};


function show_person(element, q, arch) {
	$(".bold").removeClass("bold");
	$(element).addClass("bold");
	wd(q, arch);
};

// MOD SEARCH HOUSES
function search_house() {
	$("#timeline .aktiv").removeClass('aktiv').addClass('pasiv');
	$("#view_list")
		.empty()
		.append(`<div><b>${transSpan("input_house_number")}: </b><input type='text' id='input_search' placeholder='.*' autofocus /></div><div id='list'></div>`);
	$("#input_search").on("input", function () {
		var inputValue = $(this).val();
		if (inputValue.length >= 1) {
			$("#list").empty();
			const vyhlCp = data_loc["geoJSON"].features
				.filter(feature => {
					const cpProp = feature.properties;
					return cpProp["addr:housenumber"] !== undefined &&
						cpProp["addr:housenumber"].match(inputValue) &&
						cpProp["start_date"] < 1931;
				})
				.map(feature => ({
					"start": feature["properties"]["start_date"],
					"end": feature["properties"]["end_date"],
					"obec": feature["properties"]["addr:city"],
					"cast": feature["properties"]["addr:place"],
					"cp": feature["properties"]["addr:housenumber"]
				}))
				.sort((a, b) => { return a.cp - b.cp || a.start - b.start });

			// individual house number
			vyhlCp.forEach(cp => {
				const cpRok = cp.start <= 1869 ? "1869" :
					cp.start <= 1880 ? "1880" :
						cp.start <= 1890 ? "1890" :
							cp.start <= 1900 ? "1900" :
								cp.start <= 1910 ? "1910" :
									cp.start <= 1921 ? "1921" :
										cp.start <= 1930 ? "1930" : cp.start;
				const cpDoba = ` (${cp.start}–${cp.end})`.replace(/\(([0-9]{4})–undefined\)/, "(od $1)");
				var cast = cp.cast || "";
				$("#list").append(linkCp(cpRok, cp.obec, cast, cp.cp) + cpDoba + '<br/>');
			});
		};
	});
};

// PROLINKOVÁNÍ ČP
function linkCp(rok, obec, cast, cp) {
	var testLocCp = data_loc["geoJSON"].features.filter(feature => {
		const props = feature.properties;
		return props["addr:city"] === obec &&
			props["addr:housenumber"] === cp &&
			(props["start_date"] <= rok || typeof props["start_date"] === "undefined") &&
			(props["end_date"] > rok || typeof props["end_date"] === "undefined");
	});

	if (cast != "") {
		var testLocCp = testLocCp.filter(feature => feature.properties["addr:place"] === cast);
	};

	const linkCp = testLocCp.length > 0
		? `${obec}, ${cast}, `.replace(/, ,/, ",") + `<span class="link" onclick="cp('${rok}','${obec}','${cast}','${cp}')">${transSpan("cp")} ${cp}</span>`
		: `${obec}, ${cast}, `.replace(/, ,/, ",") + `${transSpan("cp")} ${cp} <i>(${transSpan("unlocalized")})</i>`;
	return linkCp;
};

// ZOBRAZENÍ VYBRANÉHO ČP
function cp(cpRok, cpObec, cpCast, cpCp) {
	if (view_mod != "map") {
		$("#view_list").replaceWith("<div id='map'></div>");
		view_mod = "map";
	} else { map.removeLayer(area) };
	view_year = cpRok;
	view(cpObec, cpCast, cpCp);
};

