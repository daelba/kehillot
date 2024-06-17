$(document).on("click", ".flag", function () {
    const lang = $(this).attr("alt") || "cs";
    translation(lang);
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
    fetchText('translations.json').then((langData) => {
        $.each(langData, function (key, value) {
            $("#" + key).html(value[lang]);
        });

    }).catch((error) => console.log(`Error while translating: ${error}`));
}

// INIT
translation("cs");