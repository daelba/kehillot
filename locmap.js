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

// LANGUAGE FUNCTIONS

function translation(lang) {
	$.each(data_trans_texts, function (key, value) {
		$("#" + key).html(value[lang]);
	});
}

function links(lang) {
	$.each(data_trans_links, function (key, value) {
		$("a#" + key).attr("href", value[lang]["href"]).attr("alt", value[lang]["text"].replace(/<[^>]+>/g, " ")).attr("title", value[lang]["text"].replace(/<[^>]+>/g, " "));
		$("span#" + key).html(value[lang]["text"]);
	});
}

function urllang(lang) {
	var urlParams = new URLSearchParams(location.search);
	if (urlParams.get('lang')) {
		var newUrl = location.search.replace(/([\?&])lang=([^&#]*)/, '$1lang=' + lang);
	} else if (Array.from(urlParams.entries()).length > 0) {
		var newUrl = location.search + '&lang=' + lang;
	} else {
		var newUrl = location.search + '?lang=' + lang;
	}
	history.pushState({}, '', newUrl);
}

// LOCALITY FUNCTIONS

function loclang(data_loc, lang) {
	$("#loc_name").html(data_loc["loc_name"][lang]);
	view();
}

/* ------------- INIT ------------- */

// Set global variables
var view_mod = "pers";
var view_year = "1890";
var lang;
var loc;
var data_loc;
var data_trans_texts;
var data_trans_links;
var area;
var map;

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
	var waitFetchData = await fetchText('locs/' + loc + '.json').then((data) => {
		data_loc = data
	});

	var waitFetchData = await fetchText('trans_texts.json').then((data) => {
		data_trans_texts = data
	});

	var waitFetchData = await fetchText('trans_links.json').then((data) => {
		data_trans_links = data
	});

	map = L.map('map').setView(data_loc["mapCenter"], 16);
	var waitMap = await initMap();

	// CONSTRUCT INFOBOX ELEMENTS

	// INFOBOX 1 (Census information)

	// Timeline
	var years = ["1857", "1869", "1880", "1890", "1900", "1910", "1921", "1930"];
	years.forEach(function (year) {
		$("#timeline").append('<span class="pasiv" id="timeline' + year + '">' + year + '</span>');
		// TODO zkontrolovat, zda je daný rok v dané lokalitě zpracovaný
		$("#timeline" + year).on("click", function () {
			view_year = year;
			/*		if (view_mod == "map") { map.removeLayer(area) };
					if (view_mod == "map" || view_mod == "pers") { view(); }; */
			view();
		});
	});

	// Census info
	$("#info_census").append('<p><span id="loc_box1_official"></span>: <span id="loc_box1_official_value"></span></p>');
	$("#info_census").append('<p><span id="loc_box1_found"></span>: <span id="loc_box1_official_found"></span></p>');

	// View mode
	var views = ["map", "pers", "search_pers", "search_house"];
	views.forEach(function (v) {
		$("#view_mod").append('<span class="pasiv" id="view_' + v + '"></span>');
		$("#view_" + v).on("click", function () {
			view_mod = v;
			//	if (view_mod != "map") { map.removeLayer(area) }
			view();
		});
	});
	/*	$("#view_map").on("click", function () {
			view_mod = "map";
			$("#view_list").replaceWith('<div id="map"></div>');
			map = L.map('map').setView(mapCenter, 16);
			initMap();
			view();
		});
		$("#view_pers").on("click", function () {
			view_mod = "pers";
			//	map.removeLayer(area);
			$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
			view();
		});
		$("#view_search_pers").on("click", function () {
			view_mod = "search_pers";
			map.removeLayer(area);
			$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
			$("#view_list").empty();
			view();
			$('#timeline' + view_year).removeClass('aktiv').addClass('pasiv');
		});
		$("#view_search_house").on("click", function () {
			view_mod = "search_house";
			map.removeLayer(area);
			$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
			$("#view_list").empty();
			view();
			$('#timeline' + view_year).removeClass('aktiv').addClass('pasiv');
		});
		*/

	// INFOBOX 2 (Sources)
	var sources = ["pers", "map"];
	sources.forEach(function (s) {
		$("#loc_box2_cont").append('<p><b><span id="loc_box2_' + s + '"></span>: </b><span id="loc_sources_' + s + '"></span></p>');
	});

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
	//$("#debug").append("rok: "+view_year+", view: "+view_mod);
	$('.aktiv').removeClass('aktiv').addClass('pasiv');
	$('#timeline' + view_year).removeClass('pasiv').addClass('aktiv');
	$('#view_' + view_mod).removeClass('pasiv').addClass('aktiv');
	$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
	if (view_mod == "map") {
		geoQuery(view_year, cpObec, cpCast, cpCp);
	} else if (view_mod == "pers") {
		view_pers();
	} else if (view_mod == "search_pers") {
		search_pers();
	} else if (view_mod == "search_house") {
		search_house();
	};
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
		if (!osJmena.some(jmeno => jmeno.match(bydl.jm) || bydl.jm.match(jmeno))) {
			osJmena.push(bydl.jm);
		}
	});

	// Add name from "Arch"
	const archJm = arch.replace(/ \(.*/, "");
	if (!osJmena.some(jmeno => jmeno.match(archJm) || archJm.match(jmeno))) {
		osJmena.push(archJm);
	}

	// WIKIDATA
	var wikidata1 = "";
	var wikidata2 = "";
	if (q) {
		// Basic personal information
		var sparqlQuery = `SELECT ?item ?itemLabel ?narkdy ?narkdeLabel ?zemkdy ?zemkdeLabel ?uk ?leg ?ww1 ?cea ?hol WHERE {
			  SERVICE wikibase:label { bd:serviceParam wikibase:language "cs,en". }
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
		if (qDataEd.uk) udalosti.push(`<li><a href='http://is.cuni.cz/webapps/archiv/public/person/se/${qDataEd.uk.value}' target='_blank' rel='noopener'>absolvent pražské univerzity</a></li>`);
		if (qDataEd.leg) udalosti.push(`<li><a href='http://legie100.com/krev-legionare/${qDataEd.leg.value}' target='_blank' rel='noopener'>legionář</a></li>`);
		if (qDataEd.ww1) udalosti.push(`<li><a href='https://www.vuapraha.cz/padli-1-svetova/${qDataEd.ww1.value}' target='_blank' rel='noopener'>padl v 1. světové válce</a></li>`);
		if (qDataEd.cea) udalosti.push(`<li><a href='https://www.vuapraha.cz/cechoslovaci-v-zahranici/${qDataEd.cea.value}/' target='_blank' rel='noopener'>příslušník československé exilové armády (2. světová válka)</a></li>`);
		if (qDataEd.hol) udalosti.push(`<li><a href='https://www.holocaust.cz/cs/databaze-obeti/obet/${qDataEd.hol.value}/' target='_blank' rel='noopener'>oběť holokaustu</a></li>`);

		// Information abou transport
		const sparqlTrans = `SELECT ?item ?transOd ?transStartLabel ?transCilLabel WHERE {
            SERVICE wikibase:label { bd:serviceParam wikibase:language "cs,en". }
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
			udalosti.push(`<li>${transOd} deportace: ${transStart} → ${transCil}</li>`);
		});
		const ids = [`<li><a href='https://www.wikidata.org/wiki/${q}' target='_blank' rel='noopener'>Wikidata</a></li>`];
		// zobrazení informací
		wikidata1 = `<p><b>${narkdy}, ${narkde} – ${zemkdy}, ${zemkde}</b></p>`.replace("?, ?", "?");
		wikidata2 = `<h4>Další informace:</h4><ul>${udalosti.join("")}</ul><h4>Odkazy:</h4><ul>${ids.join("")}</ul>`;
	};

	$("#loc_box3_cont").empty();
	$("#loc_box3_cont").append(`<h3>${osJmena.join(" / ")} ${arch.replace(/.* \(/, "(").replace(/–xxx[0-9]/, "").replace(/\(([0-9]+)\)/, "(*$1)")}</h3>${wikidata1}<h4>Bydliště:</h4><ul>${bydliste}</ul>${wikidata2}`);
};


// MOD MAPA

function initMap() {
	var markers = [];
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			attribution: '<a href="https://www.openhistoricalmap.org/copyright">OpenHistoricalMap</a>',
			maxZoom: 19,
			minZoom: 3,
			opacity: 0.15
		}).addTo(map);
	var area;
}

function geoQuery(rok, cpObec, cpCast, cpCp) {
	var ofic = $.grep(operaty, function (ar) { return ar.rok === rok });
	$("#infosa").replaceWith('<span id="infosa"><p>oficiální počet židovských obyvatel: ' + ofic[0]['ofic'] + '</p><p>dohledáno ve sčítacích operátech: ' + ofic[0]['dohlA'] + ' (' + ofic[0]['dohlR'].replace(".", ",") + ' %)</p></span>');

	var filtrGeoJSON = $.grep(data_loc["geoJSON"].features, function (array) { return (array.properties["start_date"] <= rok || typeof array.properties["start_date"] === "undefined") && (array.properties["end_date"] > rok || typeof array.properties["end_date"] === "undefined") });

	// vrstva židovských domů
	map.createPane("JewHouse");
	map.getPane("JewHouse").style.zIndex = 630;

	// vrstva zvýrazněného domu
	var focus;
	map.createPane("FocusHouse");
	map.getPane("FocusHouse").style.zIndex = 640;

	area = L.geoJson(filtrGeoJSON, {

		onEachFeature: function (feature, layer) {

			var color = "gray"; fillColor = "gray"; fillColor = "lightgray"; fillOpacity = .8; weight = .5;
			var tags = feature.properties;
			if (typeof tags["waterway"] !== "undefined") { var typ = "water"; color = "lightblue"; fillColor = "lightblue"; fillOpacity = 1; weight = 0.5 };
			if (tags["highway"] == "residential") { var typ = "highway"; color = "gray"; fillColor = ""; fillOpacity = 1; weight = 1.5 };

			layer.setStyle({
				"color": color,
				"fillColor": fillColor,
				"fillOpacity": fillOpacity,
				"weight": weight,
			});

			if (typeof tags["addr:city"] !== "undefined") {
				var obec = tags["addr:city"];
				if (typeof tags["addr:housenumber"] !== "undefined") {
					var cp = tags["addr:housenumber"];
					if (typeof cp !== "undefined") {
						var findCp = $.grep(obyv, function (array) { return array.rok === rok && array.obec === obec && array.cp === cp });

						if (typeof tags["addr:place"] !== "undefined") {
							var findCp = $.grep(findCp, function (array) { return array.cast === tags["addr:place"] });
						};

						if (findCp.length !== 0) {
							var pocetZidu = findCp[0].pocet;
							var vypisZidu = findCp[0].obyv;
							var vypisLinks = "";
							for (var i = 0; i < pocetZidu; i++) {
								vypisLinks += '<br/>' + '<span class="link" onclick="wd(\'' + vypisZidu[i].q + '\', \'' + vypisZidu[i].arch + '\')">' + vypisZidu[i].jm + '</span>'
							};

							pop = "<center><b>" + tags["addr:city"];
							if (typeof tags["addr:place"] !== "undefined" && tags["addr:place"] !== "") { pop += ", " + tags["addr:place"] };
							pop += ", " + "čp. " + cp + "</b><br/>Obyvatelé židovského vyznání: " + pocetZidu + "</center>" + vypisLinks;
							layer.bindPopup(pop);
							if (typeof pocetZidu !== "undefined") {
								var color = 100 - (100 * pocetZidu / maxPocet);
								layer.setStyle({
									"fillColor": "hsl(21,100%," + color + "%)",
									"fillOpacity": 1,
									"weight": 0.5,
									"pane": "JewHouse"
								});
							};
						};

						// zvýraznění vybraného čp.
						if (typeof tags["addr:place"] == "undefined") { tags["addr:place"] = "" };
						if (typeof cpCast == "undefined") { cpCast = "" };
						if (tags["addr:city"] == cpObec && tags["addr:place"] == cpCast && tags["addr:housenumber"] == cpCp) {
							layer.setStyle({
								"weight": 4,
								"color": "hsl(197,100%,40%)",
								"pane": "FocusHouse"
							});
							focus = layer.getBounds().getCenter();
						};
					};
				}
			}
		}
	});
	map.addLayer(area);
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
		$("#view_list").append(`<h2 id="without_data" style="text-align:center">${data_trans_texts["without_data"][lang]}</h2>`);
	} else {
		$("#view_list").append(`<h2><span id='loc_view_pers_head'>${data_trans_texts['loc_view_pers_head'][lang]}</span> ${view_year} </h2><p align='center'></p><div id='list'></div>`);
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
		.append("<div><b><span id='view_search_pers'>" + data_trans_texts["view_search_pers"][lang] + "</span>: </b><input type='text' id='input_search' placeholder='.*' autofocus /></div><div id='list'></div>");
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
				var rec_show = `<span class="link" onclick="show_person(this, '${rec_full.q}', '${rec_full.arch}')">${rec_name}</span>`;
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
		.append(`<div><b><span id='input_house_number'>${data_trans_texts["input_house_number"][lang]}</span>: </b><input type='text' id='input_search' placeholder='.*' autofocus /></div><div id='list'></div>`);
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
		? `${obec}, ${cast}, `.replace(/, ,/, ",") + `<span class="link" onclick="cp('${rok}','${obec}','${cast}','${cp}')">čp. ${cp}</span>`
		: `${obec}, ${cast}, čp. ${cp} <i>(nelokalizováno)</i>`.replace(/^, /, "");

	return linkCp;
};

// ZOBRAZENÍ VYBRANÉHO ČP
function cp(cpRok, cpObec, cpCast, cpCp) {
	if (view_mod != "map") {
		$("#view_list").replaceWith("<div id='map'></div>");
		map = L.map('map').setView(data_loc["mapCenter"], 16);
		initMap();
		view_mod = "map";
	} else { map.removeLayer(area) };
	view_year = cpRok;
	view(cpObec, cpCast, cpCp);
};

