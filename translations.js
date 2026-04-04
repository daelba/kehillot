// JSON cache – data are fetched once and reused on language switch
const _cache = {};

function fetchText(path) {
    if (_cache[path]) return Promise.resolve(_cache[path]);
    return new Promise((resolve, reject) => {
        $.ajax({ url: path, type: "GET", dataType: "JSON" })
            .done((data) => { _cache[path] = data; resolve(data); })
            .fail((jqXHR, error) => reject(new Error(error)));
    });
}

$(document).on("click", ".flag", function () {
    const lang = $(this).attr("alt") || "cs";
    translation(lang);
    links(lang);
    locs(lang);
    urllang(lang);
});

// Handle keyboard activation of flag buttons
$(document).on("keydown", ".flag", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        $(this).trigger("click");
    }
});

function translation(lang) {
    fetchText('trans_texts.json').then((langData) => {
        $.each(langData, function (key, value) {
            $(`[trans=${key}]`).each(function () {
                $(this).html(value[lang]);
            });
        });
    }).catch((error) => console.error(`Error while translating: ${error}`));
}

function links(lang) {
    fetchText('trans_links.json').then((langData) => {
        $.each(langData, function (key, value) {
            $(`a#${key}`).attr("href", value[lang]["href"]).attr("title", value[lang]["text"].replace(/<[^>]+>/g, " "));
            $(`span[trans=${key}]`).html(value[lang]["text"]);
        });
    }).catch((error) => console.error(`Error while translating: ${error}`));
}

function locs(lang) {
    fetchText('trans_locs.json').then((locData) => {
        const $p = $('#locs').empty();
        locData.forEach((loc, i) => {
            if (i > 0) $p.append(' | ');
            $('<a>')
                .attr('href', `locmap.html?loc=${loc["link"]}&lang=${lang}`)
                .text(loc[lang])
                .appendTo($p);
        });
    }).catch((error) => console.error(`Error while translating: ${error}`));
}

function urllang(lang) {
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.pushState({}, '', url);
}

// INIT
$(document).ready(function () {
    const urlParams = new URLSearchParams(location.search);
    const lang = urlParams.get('lang') || "cs";

    translation(lang);
    links(lang);
    locs(lang);

    // Only update URL if the lang param is actually missing or different
    if (urlParams.get('lang') !== lang) {
        urllang(lang);
    }
});
