$(document).on("click", ".flag", function () {
    const lang = $(this).attr("alt") || "cs";
    translation(lang);
    links(lang);
    locs(lang);
    urllang(lang);
});

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

function translation(lang) {
    fetchText('trans_texts.json').then((langData) => {
        $.each(langData, function (key, value) {
            $("[trans=" + key + "]").each(function () {
                $(this).html(value[lang])
            });
        });
    }).catch((error) => console.log(`Error while translating: ${error}`));
}

function links(lang) {
    fetchText('trans_links.json').then((langData) => {
        $.each(langData, function (key, value) {
            $("a#" + key).attr("href", value[lang]["href"]).attr("alt", value[lang]["text"].replace(/<[^>]+>/g, " ")).attr("title", value[lang]["text"].replace(/<[^>]+>/g, " "));
            $("span[trans=" + key + "]").html(value[lang]["text"]);
        });
    }).catch((error) => console.log(`Error while translating: ${error}`));
}

function locs(lang) {
    fetchText('trans_locs.json').then((locData) => {
        var locArray = locData.map(function (loc) {
            return '<a href="locmap.html?loc=' + loc["link"] + '&lang=' + lang + '">' + loc[lang] + '</a>'
        });
        var locString = locArray.join(' | ');
        $('#locs').html(locString);
    }).catch((error) => console.log(`Error while translating: ${error}`));
}

function urllang(lang) {
	const url = new URL(location.href);
	url.searchParams.set('lang', lang);
	history.pushState({}, '', url);
}

// INIT
var urlParams = new URLSearchParams(location.search);

if (urlParams.get('lang')) {
    var lang = urlParams.get('lang')
} else {
    var lang = "cs"
};

translation(lang);
links(lang);
locs(lang);
urllang(lang);
