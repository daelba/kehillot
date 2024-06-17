// LOKALITA

$('#loc').append(decodeURIComponent(loc));

// INFOBOX

// Časová osa 

var roky = [ "1857", "1869", "1880", "1890", "1900", "1910", "1921", "1930" ];

for(var rokOsa in roky) {
	$("#osa").append('<span class="pasiv" id="osa' + roky[rokOsa] + '">' + roky[rokOsa] + '</span>');
};

for(var rokOsa in roky) {
	(function (fceosa) {
		document.getElementById("osa"+fceosa)
			.addEventListener("click", function () {
			zobraz_rok=fceosa;
			if (zobraz_mod == "mapa") {map.removeLayer(area)};
			if (zobraz_mod == "mapa" || zobraz_mod == "osob" ) { zobraz(); };
			}, true);
	})(roky[rokOsa]);
};

// Zdroje
$('#zdroje').append(zdroje);

// Zobrazení
$('#zobraz').append("<span class='pasiv' id='zobraz-mapa'>Mapa</span><span class='pasiv' id='zobraz-osob'>Osoby</span><span class='pasiv' id='zobraz-hled'>Hledat osoby</span><span class='pasiv' id='zobraz-cp'>Hledat čp.</span>");
document.getElementById("zobraz-mapa").addEventListener("click", function () {
	$("#osoby").replaceWith("<div id='map'></div>");
	map = L.map('map').setView(mapCenter, 16);
	initMap();
	zobraz_mod="mapa";
	zobraz();
}, true);
document.getElementById("zobraz-osob").addEventListener("click", function () {
	zobraz_mod="osob";
	map.removeLayer(area);
	$("#map").replaceWith("<div id='osoby' class='tab-popis'></div>");
	$("osoby").empty();
	zobraz();
}, true);
document.getElementById("zobraz-hled").addEventListener("click", function () {
	zobraz_mod="hled";
	map.removeLayer(area);
	$("#map").replaceWith("<div id='osoby' class='tab-popis'></div>");
	$("#osoby").empty();
	zobraz();
	$('#osa' + zobraz_rok).removeClass('aktiv').addClass('pasiv');
}, true);
document.getElementById("zobraz-cp").addEventListener("click", function () {
	zobraz_mod="cp";
	map.removeLayer(area);
	$("#map").replaceWith("<div id='osoby' class='tab-popis'></div>");
	$("#osoby").empty();
	zobraz();
	$('#osa' + zobraz_rok).removeClass('aktiv').addClass('pasiv');
}, true);

function zobraz (cpObec,cpCast,cpCp) {
	$('.aktiv').removeClass('aktiv').addClass('pasiv');
	$('#osa' + zobraz_rok).removeClass('pasiv').addClass('aktiv');
	$('#zobraz-' + zobraz_mod).removeClass('pasiv').addClass('aktiv');
	if ( zobraz_mod == "mapa" ) {
		geoQuery(zobraz_rok, cpObec, cpCast, cpCp);
	} else if ( zobraz_mod == "osob" ) {
		osoby();
	} else if ( zobraz_mod == "hled") {
		hledat();
	} else if ( zobraz_mod == "cp") {
		hledatCp();
	};
};

// SPARQL FUNKCE

var endpointUrl = 'https://query.wikidata.org/sparql';
function makeSPARQLQuery( endpointUrl, sparqlQuery, doneCallback ) {
	var settings = {
		headers: { Accept: 'application/sparql-results+json' },
		data: { query: sparqlQuery }
	};
	return $.ajax( endpointUrl, settings ).then( doneCallback );
};

async function wd (q, arch) {

	// vyhledání údajů o bydlišti a různých variant jmen
	var osBydl=[];
	var osJmena=[];

	for (var o=0 ; o < obyv.length ; o++) {
		for(os=0 ; os< obyv[o]["obyv"].length ; os++) {
			if(obyv[o]["obyv"][os].arch == arch) {
				var vyhlBydl = { 
					"jm":	obyv[o]["obyv"][os]["jm"],
					"rok":	obyv[o]["rok"],
					"obec": obyv[o]["obec"],
					"cast": obyv[o]["cast"],
					"cp":	obyv[o]["cp"]
					};
				osBydl.push(vyhlBydl);
			};
		};
	};

	// zpracování údajů
	osBydl.sort(function(a,b){return (a.rok - b.rok)});
	var bydliste="";
	for (b=0; b<osBydl.length ; b++) {
		bydliste +="<li>" + (osBydl[b].rok + ": " + linkCp(osBydl[b].rok, osBydl[b].obec, osBydl[b].cast, osBydl[b].cp)) + "</li>";
		var duplJm = 0;
		for (j=0;j<osJmena.length;j++) {
			if ( osJmena[j].match(osBydl[b].jm) || osBydl[b].jm.match(osJmena[j]) ) { duplJm = duplJm + 1 };
		};
		if ( duplJm == 0 ) { osJmena.push(osBydl[b].jm) };
	};
	
	// přidání jména z arch
	var duplJm = 0;
	var archJm = arch.replace(/ \(.*/,"");
	for (j=0;j<osJmena.length;j++) {

		if ( osJmena[j].match(archJm) || archJm.match(osJmena[j])  ) { duplJm = duplJm + 1 };
	};
	if ( duplJm == 0 ) { osJmena.push(archJm) };

	// WIKIDATA
	var wikidata1="";
	var wikidata2="";
	if ( q != "" ) {
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

		var runQuery1 = makeSPARQLQuery( endpointUrl, sparqlQuery, async function ( qData ) {
			var qDataEd = qData.results.bindings;
			if ( typeof qDataEd[0].narkdy !== "undefined" ) { var narkdy = qDataEd[0].narkdy.value.replace(/-0/g,"-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/,"$3. $2. $1") } else { var narkdy = "?" };
			if ( typeof qDataEd[0].zemkdy !== "undefined" ) { var zemkdy = qDataEd[0].zemkdy.value.replace(/-0/g,"-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/,"$3. $2. $1") } else { var zemkdy = "?" };
			if ( typeof qDataEd[0].narkdeLabel !== "undefined" ) { var narkde = qDataEd[0].narkdeLabel.value } else { var narkde = "?" };
			if ( typeof qDataEd[0].zemkdeLabel !== "undefined" ) { var zemkde = qDataEd[0].zemkdeLabel.value } else { var zemkde = "?" };
			var udalosti=[];
			var ids=[];
			if ( typeof qDataEd[0].uk !== "undefined" ) {
				udalosti.push("<li><a href='http://is.cuni.cz/webapps/archiv/public/person/se/"+ qDataEd[0].uk.value + "' target='_blank' rel='noopener'>absolvent pražské univerzity</a></li>")};
			if ( typeof qDataEd[0].leg !== "undefined" ) {udalosti.push("<li><a href='http://legie100.com/krev-legionare/"+ qDataEd[0].leg.value + "' target='_blank' rel='noopener'>legionář</a></li>")};
			if ( typeof qDataEd[0].ww1 !== "undefined" ) {udalosti.push("<li><a href='https://www.vuapraha.cz/padli-1-svetova/"+ qDataEd[0].ww1.value + "' target='_blank' rel='noopener'>padl v 1. světové válce</a></li>")};
			if ( typeof qDataEd[0].cea !== "undefined" ) {udalosti.push("<li><a href='https://www.vuapraha.cz/cechoslovaci-v-zahranici/"+ qDataEd[0].cea.value + "/' target='_blank' rel='noopener'>příslušník československé exilové armády (2. světová válka)</a></li>")};
			if ( typeof qDataEd[0].hol !== "undefined" ) {udalosti.push("<li><a href='https://www.holocaust.cz/cs/databaze-obeti/obet/"+ qDataEd[0].hol.value + "/' target='_blank' rel='noopener'>oběť holokaustu</a></li>")};
			
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
						
			var runQuery2 = makeSPARQLQuery( endpointUrl, sparqlTrans, async function ( tData ) {
				var tDataEd = tData.results.bindings;
				if ( typeof tDataEd.length !== 0 ) {
					var tCount = tDataEd.length;
					for ( let i = 0 ; i<tCount ; i++) {
						var transOd = tDataEd[i].transOd.value.replace(/-0/g,"-").replace(/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/,"$3. $2. $1");
						var transStart = tDataEd[i].transStartLabel.value;
						var transCil = tDataEd[i].transCilLabel.value;
						udalosti.push("<li>" + transOd + " deportace: " + transStart + " → " + transCil + "</li>")
					}
				};
				ids.push("<li><a href='https://www.wikidata.org/wiki/" + q + "' target='_blank' rel='noopener'>Wikidata</a></li>");
			
		// zobrazení informací
		wikidata1 = ("<p><b>" + narkdy + ", " + narkde + " – " + zemkdy + ", " + zemkde + "</b></p>").replace("?, ?","?");
		wikidata2 = "<h4>Další informace:</h4><ul>" + udalosti.join("") + "</ul><h4>Odkazy:</h4><ul>" + ids.join("") + "</ul>";
				});
			var waitQuery2 = await runQuery2;
		});
		var waitQuery1 = await runQuery1;
	};

	$("#osoba").empty();
	$("#osoba").append("<h3>" + osJmena.join(" / ") + " " + arch.replace(/.* \(/,"\(").replace(/–xxx[0-9]/,"").replace(/\(([0-9]+)\)/,"\(*$1\)") + "</h3>" + wikidata1 + "<h4>Bydliště:</h4><ul>" + bydliste + "</ul>" + wikidata2);
};


// MOD MAPA

var map = L.map('map').setView(mapCenter, 16);

function initMap () {

	var markers = [];

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	    {
	      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	      maxZoom: 19,
	      minZoom: 3,
	      opacity: 0.15
	    }).addTo(map);

	var area;
}

function geoQuery ( rok, cpObec, cpCast, cpCp ) {
	var ofic = $.grep(operaty, function (ar) { return ar.rok === rok});
	$("#infosa").replaceWith('<span id="infosa"><p>oficiální počet židovských obyvatel: ' + ofic[0]['ofic'] + '</p><p>dohledáno ve sčítacích operátech: ' + ofic[0]['dohlA'] + ' (' + ofic[0]['dohlR'].replace(".",",") + ' %)</p></span>');

	var filtrGeoJSON = $.grep(geoJSON.features, function (array) { return (array.properties["start_date"] <= rok || typeof array.properties["start_date"] === "undefined" ) && (array.properties["end_date"] > rok || typeof array.properties["end_date"] === "undefined" ) });

	// vrstva židovských domů
	map.createPane("JewHouse");
	map.getPane("JewHouse").style.zIndex = 630;
	
	// vrstva zvýrazněného domu
	var focus;
	map.createPane("FocusHouse");
	map.getPane("FocusHouse").style.zIndex = 640;
		
	area = L.geoJson(filtrGeoJSON, {
	
	    onEachFeature: function (feature, layer) {

		var color="gray"; fillColor = "gray"; fillColor="lightgray"; fillOpacity=.8; weight=.5;
		var tags = feature.properties;
		if ( typeof tags["waterway"] !== "undefined" ) { var typ = "water"; color="lightblue"; fillColor = "lightblue"; fillOpacity = 1; weight = 0.5 };
		if ( tags["highway"] == "residential" ) { var typ = "highway"; color="gray"; fillColor = ""; fillOpacity = 1; weight = 1.5};

		layer.setStyle({
			"color": color,
			"fillColor": fillColor,
			"fillOpacity": fillOpacity,
			"weight": weight,
			});
			
		if ( typeof tags["addr:city"] !== "undefined" ) {
			var obec = tags["addr:city"];
			if ( typeof tags["addr:housenumber"] !== "undefined" ) {
				var cp = tags["addr:housenumber"];
				if ( typeof cp !== "undefined" ) {
					var findCp = $.grep(obyv, function (array) { return array.rok === rok && array.obec === obec && array.cp === cp });

					if ( typeof tags["addr:place"] !== "undefined" ) {
						var findCp = $.grep(findCp, function (array) { return array.cast === tags["addr:place"] });
					};
					
					if ( findCp.length !== 0 ) {
						var pocetZidu = findCp[0].pocet;
						var vypisZidu = findCp[0].obyv;
						var vypisLinks = "";
						for(var i=0 ; i<pocetZidu ; i++) {
							vypisLinks += '<br/>' + '<span class="link" onclick="wd(\'' + vypisZidu[i].q + '\', \'' + vypisZidu[i].arch + '\')">' + vypisZidu[i].jm + '</span>'
						};
					
						pop = "<center><b>" + tags["addr:city"];
						if ( typeof tags["addr:place"] !== "undefined" && tags["addr:place"] !== "" ) { pop += ", " + tags["addr:place"] };
						pop += ", " + "čp. "+ cp + "</b><br/>Obyvatelé židovského vyznání: " + pocetZidu + "</center>" + vypisLinks;
						layer.bindPopup(pop);
						if ( typeof pocetZidu !== "undefined" ) {			
							var color = 100-(100*pocetZidu/maxPocet);
							layer.setStyle({
								"fillColor": "hsl(21,100%,"+color+"%)",
								"fillOpacity": 1,
								"weight": 0.5,
								"pane": "JewHouse"
								});
						};
					};
					
					// zvýraznění vybraného čp.
					if ( typeof tags["addr:place"] == "undefined" ) { tags["addr:place"] = "" };
					if ( typeof cpCast == "undefined" ) { cpCast = "" };
					if ( tags["addr:city"] == cpObec && tags["addr:place"] == cpCast && tags["addr:housenumber"] == cpCp ) {
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
	if ( typeof cpCp !== "undefined" ) {map.setView(focus, 17)};
};

// MOD OSOBY
function osoby () {
	$('#osoby').empty().append("<h2>Osoby židovského vyznání bydlící v lokalitě roku " + zobraz_rok + "</h2><p align='center'></p><div id='osoby-tab'></div>");
	var filtrOsoby = $.grep(obyv, function (array) { return (array["rok"] === zobraz_rok ) }).sort(function(a,b){return ("0000"+a.cp.replace(/–.*/,"")).slice(-4) - ("0000"+b.cp.replace(/–.*/,"")).slice(-4)});
	for ( var c=0 ; c<filtrOsoby.length ; c++ ) {
		var vypis=[];
		for (var o=0 ; o < filtrOsoby[c].obyv.length ; o++) {
			vypis.push('<span class="link" onclick="wd(\'' + filtrOsoby[c].obyv[o].q + '\', \'' + filtrOsoby[c].obyv[o].arch + '\')">' + filtrOsoby[c].obyv[o].jm + '</span>')
		};
		$("#osoby-tab").append("<p><b>" + linkCp(zobraz_rok,filtrOsoby[c].obec,filtrOsoby[c].cast,filtrOsoby[c].cp) + ":</b> " + vypis.join(", ") + "</p>");
	};
};

function hledat_wd (id,jm,arch) {
	$(".bold").removeClass("bold");
	$("#vyhl"+id).addClass("bold");
	wd(jm,arch);
};

// MOD HLEDAT OSOBY
function hledat () {
	$("#osoby").append("<div><b>Vyhledat osoby: </b><input type='text' id='input-hledat' placeholder='.*' /></div><div id='osoby-tab'></div>");
	document.getElementById("input-hledat").addEventListener("input", i => {
		var vyhlVal = document.getElementById("input-hledat").value;
		var len = vyhlVal.length;
		if ( len >= 1 ) {
			$("#osoby-tab").empty();
			var vyhlOsoby = [];
			var vyhlArch = [];
			for (var o=0 ; o < obyv.length ; o++) {
				for(os=0 ; os< obyv[o]["obyv"].length ; os++) {
					if(obyv[o]["obyv"][os].jm.toLowerCase().match(vyhlVal.toLowerCase())) {
						var vyhlOs = { 
							"arch": obyv[o]["obyv"][os]["arch"],
							"jm":	obyv[o]["obyv"][os]["jm"],
							"q":	obyv[o]["obyv"][os]["q"],
							"rok":	obyv[o]["rok"]
//							"obec": obyv[o]["obec"],
//							"cast": obyv[o]["cast"],
//							"cp":	obyv[o]["cp"]
							};
						vyhlOsoby.push(vyhlOs);
						vyhlArch.push(obyv[o]["obyv"][os]["arch"]);
					};
				};
			};
			for (var q=0; q < Qlabels.length; q++) {
				if(Qlabels[q].jm.toLowerCase().match(vyhlVal.toLowerCase())) {
					var vyhlOs = {
						"arch": Qlabels[q]["arch"],
						"jm":	Qlabels[q]["jm"],
						"q":	Qlabels[q]["q"],
						"rok":	"1940"
						};
					vyhlOsoby.push(vyhlOs);
					vyhlArch.push(Qlabels[q]["arch"]);
				};
			};
			
			vyhlOsoby.sort(function(a,b){return a.rok - b.rok});
			var vypisArch = $.unique(vyhlArch.sort());

			// jednotlivé unikátní osoby
			for ( x=0 ; x < vypisArch.length ; x++) {
			
				// filtrace záznamů k osobě
				var jmDet = $.grep(vyhlOsoby, function (array) { return (array["arch"] === vypisArch[x]) });
				
				// jméno
				var recJmeno = vypisArch[x].replace(/–xxx[0-9]/,"").replace(/\(([0-9]+)\)/,"(*$1)");
				var recOs='<span id="vyhl' + x + '" class="link" onclick="hledat_wd(' + x + ', \'' + jmDet[0].q + '\', \'' + jmDet[0].arch + '\')">' + recJmeno + '</span>';
				$("#osoby-tab").append(recOs + '<br/>');
			}
		};
	});
};

// MOD HLEDAT ČP
function hledatCp () {
	$("#osoby").append("<div><b>Vyhledat číslo popisné: </b><input type='text' id='input-hledat' placeholder='.*' /></div><div id='cp-tab'></div>");
	document.getElementById("input-hledat").addEventListener("input", i => {
		var vyhlVal = document.getElementById("input-hledat").value;
		var len = vyhlVal.length;
		if ( len >= 1 ) {
			$("#cp-tab").empty();
			var vyhlCp = [];
			for (var c=0 ; c < geoJSON.features.length ; c++) {
					var cpProp = geoJSON.features[c]["properties"];
					if(typeof cpProp["addr:housenumber"] !== "undefined" && cpProp["addr:housenumber"].match(vyhlVal) && cpProp["start_date"] < 1931) {
						var vyhlObj = { 
							"start":	cpProp["start_date"],
							"end":	cpProp["end_date"],
							"obec": cpProp["addr:city"],
							"cast": cpProp["addr:place"],
							"cp": cpProp["addr:housenumber"]
							};
						vyhlCp.push(vyhlObj);
				};
			};
			vyhlCp.sort(function(a,b){return a.cp - b.cp || a.start - b.start});

			// jednotlivá čp
			for ( x=0 ; x < vyhlCp.length ; x++) {
				if ( vyhlCp[x].start <= 1869 ) { var cpRok = "1869" }
				else if ( vyhlCp[x].start <= 1880) { var cpRok = "1880" }
				else if ( vyhlCp[x].start <= 1890) { var cpRok = "1890" }
				else if ( vyhlCp[x].start <= 1900) { var cpRok = "1900" }
				else if ( vyhlCp[x].start <= 1910) { var cpRok = "1910" }
				else if ( vyhlCp[x].start <= 1921) { var cpRok = "1921" }
				else if ( vyhlCp[x].start <= 1930) { var cpRok = "1930" }
				else { var cpRok = vyhlCp[x].start };
				var cpDoba = (' (' + vyhlCp[x].start + '–' + vyhlCp[x].end + ')').replace(/\(([0-9]{4})–undefined\)/,"(od $1)");
				if ( typeof vyhlCp[x].cast !== "undefined" ) { var cast = vyhlCp[x].cast } else {vyhlCp[x].cast = "" };
				$("#cp-tab").append(linkCp(cpRok,vyhlCp[x].obec,vyhlCp[x].cast,vyhlCp[x].cp) + cpDoba +'<br/>');
			}
		};
	});
};

// PROLINKOVÁNÍ ČP
function linkCp ( rok, obec, cast, cp ) {
	var testLocCp = $.grep(geoJSON.features, function (array) { return (array.properties["addr:city"] == obec && array.properties["addr:housenumber"] == cp && (array.properties["start_date"] <= rok || typeof array.properties["start_date"] === "undefined" ) && (array.properties["end_date"] > rok || typeof array.properties["end_date"] === "undefined" ) )});
	
	if ( cast != "" ) { var testLocCp = $.grep(testLocCp, function (array) { return (array.properties["addr:place"] == cast)}); };
	if ( testLocCp.length > 0 ) {
		var linkCp = (obec + ', ' + cast + ', ').replace(/, ,/,",") + '<span class="link" onclick="cp(\'' + rok + '\',\'' + obec + '\',\'' + cast + '\',\'' + cp + '\')">čp. ' + cp + '</span>';
	} else { var linkCp = (obec + ', ' + cast + ', čp. ' + cp + ' <i>(nelokalizováno)</i>').replace(/^, /,"");
	}
	return linkCp
};

// ZOBRAZENÍ VYBRANÉHO ČP
function cp (cpRok,cpObec,cpCast,cpCp) {
	if (zobraz_mod != "mapa") {
		$("#osoby").replaceWith("<div id='map'></div>");
		map = L.map('map').setView(mapCenter, 16);
		initMap();
		zobraz_mod="mapa";
	} else { map.removeLayer(area) };
	zobraz_rok=cpRok;
	zobraz(cpObec,cpCast,cpCp);
};

// INICIALIZACE
initMap();
var zobraz_mod="mapa";
var zobraz_rok="1890";
zobraz();
