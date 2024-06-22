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
	//map.removeLayer(area);
	if (view_mod == "map") {
		geoQuery(view_year, cpObec, cpCast, cpCp);
	} else if (view_mod == "pers") {
		view_pers();
	} else if (view_mod == "search_pers") {
		search_pers();
	} else if (view_mod == "search_house") {
		hledatCp();
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

	// vyhledání údajů o bydlišti a různých variant jmen
	var osBydl = [];
	var osJmena = [];

	data_loc["obyv"].forEach(house => {
		house["obyv"].forEach(person => {
			if (person["arch"] == arch) {
				var vyhlBydl = {
					"jm": person["jm"],
					"rok": house["rok"],
					"obec": house["obec"],
					"cast": house["cast"],
					"cp": house["cp"]
				};
				osBydl.push(vyhlBydl);
			};
		});
	});

	// zpracování údajů
	osBydl.sort(function (a, b) { return (a.rok - b.rok) });
	var bydliste = "";
	for (b = 0; b < osBydl.length; b++) {
		bydliste += "<li>" + (osBydl[b].rok + ": " + linkCp(osBydl[b].rok, osBydl[b].obec, osBydl[b].cast, osBydl[b].cp)) + "</li>";
		var duplJm = 0;
		for (j = 0; j < osJmena.length; j++) {
			if (osJmena[j].match(osBydl[b].jm) || osBydl[b].jm.match(osJmena[j])) { duplJm = duplJm + 1 };
		};
		if (duplJm == 0) { osJmena.push(osBydl[b].jm) };
	};

	// přidání jména z arch
	var duplJm = 0;
	var archJm = arch.replace(/ \(.*/, "");
	for (j = 0; j < osJmena.length; j++) {

		if (osJmena[j].match(archJm) || archJm.match(osJmena[j])) { duplJm = duplJm + 1 };
	};
	if (duplJm == 0) { osJmena.push(archJm) };

	// WIKIDATA
	var wikidata1 = "";
	var wikidata2 = "";
	if (q != "") {
		var runQuery2 = "";
		// základní informace o osobě
		var sparqlQuery = "SELECT ?item ?itemLabel ?narkdy ?narkdeLabel ?zemkdy ?zemkdeLabel ?uk ?leg ?ww1 ?cea ?hol WHERE {\n" +
			"  SERVICE wikibase:label { bd:serviceParam wikibase:language \"cs,en\". }\n" +
			"  VALUES ?item { wd:" + q + " }\n" +
			"  OPTIONAL {?item wdt:P569 ?narkdy}\n" +
			"  OPTIONAL {?item wdt:P19 ?narkde}\n" +
			"  OPTIONAL {?item p:P570/psv:P570 [wikibase:timePrecision 11; wikibase:timeValue ?zemkdy]}\n" +
			"  OPTIONAL {?item wdt:P20 ?zemkde}\n" +
			"  OPTIONAL {?item wdt:P8953 ?uk}\n" +
			"  OPTIONAL {?item wdt:P9695 ?leg}\n" +
			// TODO			"  OPTIONAL {?item wdt:P9109 ?ww1}\n" +
			"  OPTIONAL {?item wdt:P11465 ?cea}\n" +
			"  OPTIONAL {?item wdt:P9109 ?hol}\n" +
			"}";

		var runQuery1 = makeSPARQLQuery(endpointUrl, sparqlQuery, async function (qData) {
			var qDataEd = qData.results.bindings;
			if (typeof qDataEd[0].narkdy !== "undefined") { var narkdy = qDataEd[0].narkdy.value.replace(/-0/g, "-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, "$3. $2. $1") } else { var narkdy = "?" };
			if (typeof qDataEd[0].zemkdy !== "undefined") { var zemkdy = qDataEd[0].zemkdy.value.replace(/-0/g, "-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, "$3. $2. $1") } else { var zemkdy = "?" };
			if (typeof qDataEd[0].narkdeLabel !== "undefined") { var narkde = qDataEd[0].narkdeLabel.value } else { var narkde = "?" };
			if (typeof qDataEd[0].zemkdeLabel !== "undefined") { var zemkde = qDataEd[0].zemkdeLabel.value } else { var zemkde = "?" };
			var udalosti = [];
			var ids = [];
			if (typeof qDataEd[0].uk !== "undefined") {
				udalosti.push("<li><a href='http://is.cuni.cz/webapps/archiv/public/person/se/" + qDataEd[0].uk.value + "' target='_blank' rel='noopener'>absolvent pražské univerzity</a></li>")
			};
			if (typeof qDataEd[0].leg !== "undefined") { udalosti.push("<li><a href='http://legie100.com/krev-legionare/" + qDataEd[0].leg.value + "' target='_blank' rel='noopener'>legionář</a></li>") };
			if (typeof qDataEd[0].ww1 !== "undefined") { udalosti.push("<li><a href='https://www.vuapraha.cz/padli-1-svetova/" + qDataEd[0].ww1.value + "' target='_blank' rel='noopener'>padl v 1. světové válce</a></li>") };
			if (typeof qDataEd[0].cea !== "undefined") { udalosti.push("<li><a href='https://www.vuapraha.cz/cechoslovaci-v-zahranici/" + qDataEd[0].cea.value + "/' target='_blank' rel='noopener'>příslušník československé exilové armády (2. světová válka)</a></li>") };
			if (typeof qDataEd[0].hol !== "undefined") { udalosti.push("<li><a href='https://www.holocaust.cz/cs/databaze-obeti/obet/" + qDataEd[0].hol.value + "/' target='_blank' rel='noopener'>oběť holokaustu</a></li>") };

			// informace o transportu
			var trans = "";

			var sparqlTrans = "SELECT ?item ?transOd ?transStartLabel ?transCilLabel WHERE {\n" +
				"  SERVICE wikibase:label { bd:serviceParam wikibase:language \"cs,en\". }\n" +
				"  VALUES ?item { wd:" + q + " }\n" +
				"  ?item wdt:P793 ?trans.\n" +
				"  ?trans wdt:P580 ?transOd;\n" +
				"         wdt:P1427 ?transStart;\n" +
				"         wdt:P1444 ?transCil.\n" +
				"} ORDER BY ?transOd";

			var runQuery2 = makeSPARQLQuery(endpointUrl, sparqlTrans, async function (tData) {
				var tDataEd = tData.results.bindings;
				if (typeof tDataEd.length !== 0) {
					var tCount = tDataEd.length;
					for (let i = 0; i < tCount; i++) {
						var transOd = tDataEd[i].transOd.value.replace(/-0/g, "-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, "$3. $2. $1");
						var transStart = tDataEd[i].transStartLabel.value;
						var transCil = tDataEd[i].transCilLabel.value;
						udalosti.push("<li>" + transOd + " deportace: " + transStart + " → " + transCil + "</li>")
					}
				};
				ids.push("<li><a href='https://www.wikidata.org/wiki/" + q + "' target='_blank' rel='noopener'>Wikidata</a></li>");

				// zobrazení informací
				wikidata1 = ("<p><b>" + narkdy + ", " + narkde + " – " + zemkdy + ", " + zemkde + "</b></p>").replace("?, ?", "?");
				wikidata2 = "<h4>Další informace:</h4><ul>" + udalosti.join("") + "</ul><h4>Odkazy:</h4><ul>" + ids.join("") + "</ul>";
			});
			var waitQuery2 = await runQuery2;
		});
		var waitQuery1 = await runQuery1;
	};

	$("#loc_box3_cont").empty();
	$("#loc_box3_cont").append("<h3>" + osJmena.join(" / ") + " " + arch.replace(/.* \(/, "\(").replace(/–xxx[0-9]/, "").replace(/\(([0-9]+)\)/, "\(*$1\)") + "</h3>" + wikidata1 + "<h4>Bydliště:</h4><ul>" + bydliste + "</ul>" + wikidata2);
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
	$("#map").replaceWith("<div id='view_list' class='tab-popis'></div>");
	$('#view_list').empty()
	var filter_houses = $.grep(data_loc["obyv"], function (array) { return (array["rok"] === view_year) })
		.sort(function (a, b) {
			if (a.obec < b.obec) return -1;
			if (a.obec > b.obec) return 1;
			if (a.cast < b.cast) return -1;
			if (a.cast > b.cast) return 1;
			if (("0000" + a.cp.replace(/–.*/, "")).slice(-4) < ("0000" + b.cp.replace(/–.*/, "")).slice(-4)) return -1;
			if (("0000" + a.cp.replace(/–.*/, "")).slice(-4) > ("0000" + b.cp.replace(/–.*/, "")).slice(-4)) return 1;
			return 0;
		});
	if (filter_houses.length == 0) {
		$("#view_list").append('<h2 id="without_data" style="text-align:center">' + data_trans_texts["without_data"][lang] + '</h2>');
	} else {
		$("#view_list").append("<h2><span id='loc_view_pers_head'>" + data_trans_texts["loc_view_pers_head"][lang] + "</span> " + view_year + "</h2><p align='center'></p><div id='list'></div>");
		$("#list").append(filter_houses);
		filter_houses.forEach(house => {
			var vypis = [];
			house["obyv"].forEach(person => {
				vypis.push('<span class="link" onclick="show_person(this,\'' + person["q"] + '\', \'' + person["arch"] + '\')">' + person["jm"] + '</span>')
			});
			$("#list").append("<p><b>" + linkCp(view_year, house["obec"], house["cast"], house["cp"]) + ":</b> " + vypis.join(", ") + "</p>");
		})
	}
};

// MOD SEARCH PERSONS
function search_pers() {
	$("#timeline .aktiv").removeClass('aktiv').addClass('pasiv');
	$("#view_list")
		.empty()
		.append("<div><b>Vyhledat osoby: </b><input type='text' id='input_search' placeholder='.*' /></div><div id='list'></div>");
	$("#input_search").on("input", function () {
		var inputValue = $(this).val();
		if (inputValue.length >= 1) {
			$("#list").empty();
			var foundPers = [];
			var foundPersID = [];
			// find the name in census
			for (var o = 0; o < data_loc["obyv"].length; o++) {
				for (os = 0; os < data_loc["obyv"][o]["obyv"].length; os++) {
					if (data_loc["obyv"][o]["obyv"][os].jm.toLowerCase().match(inputValue.toLowerCase())) {
						var foundPersData = {
							"arch": data_loc["obyv"][o]["obyv"][os]["arch"],
							"jm": data_loc["obyv"][o]["obyv"][os]["jm"],
							"q": data_loc["obyv"][o]["obyv"][os]["q"],
							"rok": data_loc["obyv"][o]["rok"]
						};
						foundPers.push(foundPersData);
						foundPersID.push(data_loc["obyv"][o]["obyv"][os]["arch"]);
					};
				};
			};
			// find the name in Wikidata labels
			for (var q = 0; q < data_loc["Qlabels"].length; q++) {
				if (data_loc["Qlabels"][q].jm.toLowerCase().match(inputValue.toLowerCase())) {
					var foundPersData = {
						"arch": data_loc["Qlabels"][q]["arch"],
						"jm": data_loc["Qlabels"][q]["jm"],
						"q": data_loc["Qlabels"][q]["q"],
						"rok": "1940"
					};
					foundPers.push(foundPersData);
					foundPersID.push(data_loc["Qlabels"][q]["arch"]);
				};
			};

			foundPers.sort(function (a, b) { return a.rok - b.rok });
			var listPers = $.unique(foundPersID.sort());

			listPers.forEach(personID => {
				var rec_full = $.grep(foundPers, function (array) { return (array["arch"] === personID) });
				var rec_name = personID.replace(/–xxx[0-9]/, "").replace(/\(([0-9]+)\)/, "(*$1)");
				var rec_show = '<span class="link" onclick="show_person(this, \'' + rec_full[0].q + '\', \'' + rec_full[0].arch + '\')">' + rec_name + '</span>';
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
function hledatCp() {
	$("#osoby").append("<div><b>Vyhledat číslo popisné: </b><input type='text' id='input-hledat' placeholder='.*' /></div><div id='cp-tab'></div>");
	document.getElementById("input-hledat").addEventListener("input", i => {
		var vyhlVal = document.getElementById("input-hledat").value;
		var len = vyhlVal.length;
		if (len >= 1) {
			$("#cp-tab").empty();
			var vyhlCp = [];
			for (var c = 0; c < data_loc["geoJSON"].features.length; c++) {
				var cpProp = data_loc["geoJSON"].features[c]["properties"];
				if (typeof cpProp["addr:housenumber"] !== "undefined" && cpProp["addr:housenumber"].match(vyhlVal) && cpProp["start_date"] < 1931) {
					var vyhlObj = {
						"start": cpProp["start_date"],
						"end": cpProp["end_date"],
						"obec": cpProp["addr:city"],
						"cast": cpProp["addr:place"],
						"cp": cpProp["addr:housenumber"]
					};
					vyhlCp.push(vyhlObj);
				};
			};
			vyhlCp.sort(function (a, b) { return a.cp - b.cp || a.start - b.start });

			// jednotlivá čp
			for (x = 0; x < vyhlCp.length; x++) {
				if (vyhlCp[x].start <= 1869) { var cpRok = "1869" }
				else if (vyhlCp[x].start <= 1880) { var cpRok = "1880" }
				else if (vyhlCp[x].start <= 1890) { var cpRok = "1890" }
				else if (vyhlCp[x].start <= 1900) { var cpRok = "1900" }
				else if (vyhlCp[x].start <= 1910) { var cpRok = "1910" }
				else if (vyhlCp[x].start <= 1921) { var cpRok = "1921" }
				else if (vyhlCp[x].start <= 1930) { var cpRok = "1930" }
				else { var cpRok = vyhlCp[x].start };
				var cpDoba = (' (' + vyhlCp[x].start + '–' + vyhlCp[x].end + ')').replace(/\(([0-9]{4})–undefined\)/, "(od $1)");
				if (typeof vyhlCp[x].cast !== "undefined") { var cast = vyhlCp[x].cast } else { vyhlCp[x].cast = "" };
				$("#cp-tab").append(linkCp(cpRok, vyhlCp[x].obec, vyhlCp[x].cast, vyhlCp[x].cp) + cpDoba + '<br/>');
			}
		};
	});
};

// PROLINKOVÁNÍ ČP
function linkCp(rok, obec, cast, cp) {
	var testLocCp = $.grep(data_loc["geoJSON"].features, function (array) { return (array.properties["addr:city"] == obec && array.properties["addr:housenumber"] == cp && (array.properties["start_date"] <= rok || typeof array.properties["start_date"] === "undefined") && (array.properties["end_date"] > rok || typeof array.properties["end_date"] === "undefined")) });

	if (cast != "") { var testLocCp = $.grep(testLocCp, function (array) { return (array.properties["addr:place"] == cast) }); };
	if (testLocCp.length > 0) {
		var linkCp = (obec + ', ' + cast + ', ').replace(/, ,/, ",") + '<span class="link" onclick="cp(\'' + rok + '\',\'' + obec + '\',\'' + cast + '\',\'' + cp + '\')">čp. ' + cp + '</span>';
	} else {
		var linkCp = (obec + ', ' + cast + ', čp. ' + cp + ' <i>(nelokalizováno)</i>').replace(/^, /, "");
	}
	return linkCp
};

// ZOBRAZENÍ VYBRANÉHO ČP
function cp(cpRok, cpObec, cpCast, cpCp) {
	if (zobraz_mod != "mapa") {
		$("#osoby").replaceWith("<div id='map'></div>");
		map = L.map('map').setView(mapCenter, 16);
		initMap();
		zobraz_mod = "mapa";
	} else { map.removeLayer(area) };
	view_year = cpRok;
	zobraz(cpObec, cpCast, cpCp);
};

