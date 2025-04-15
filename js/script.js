$(document).ready(function () {
    "use strict";
    console.info("Glavna skripta je pokrenuta.");
    document.normalize();
    $("head").each(function () {
        $(this).prepend("<meta name='mobile-web-app-capable' content='yes'>", "<meta name='apple-mobile-web-app-capable' content='yes'>", "<meta name='MSThemeCompatible' content='yes'>", "<meta http-equiv='cleartype' content='on'>", "<meta http-equiv='x-dns-prefetch-control' content='on'>", "<meta http-equiv='Cache-control' content='no-cache'>", "<meta http-equiv='Pragma' content='no-cache'>", "<meta http-equiv='Expires' content='-1'>");
        $(this).prepend("<meta name='author' content='Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net'>", "<meta name='reply-to' content='srdjan.balesevic%40yahoo.com'>", "<meta name='language' content='sr'>", "<meta name='host' content='pages.github.com'>", "<meta name='geo.region' content='BA-SRP'>", "<meta name='geo.placename' content='Добој'>", "<meta name='twitter:creator' content='@BaleshSrle'>", "<meta name='twitter:site' content='@BaleshSrle'>");
        $(this).append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css'>", "<link rel='dns-prefetch' href='https://cdn.jsdelivr.net/'>", "<link rel='preconnect' href='https://cdn.jsdelivr.net/'>", "<link rel='prefetch' href='https://img.shields.io/'>");
        $(this).children("link[rel='stylesheet'], link[rel='preconnect'], script:lt(2)").attr("crossorigin", "anonymous");
    });
    //$("body").css("background", "url('https://upload.wikimedia.org/wikipedia/sr/6/68/Saobra%C4%87ajni_fakultet_Doboj.png') right bottom / 200px no-repeat fixed padding-box padding-box");
    $("body").css("background", "url('https://sf.ues.rs.ba/cir/wp-content/uploads/2024/04/LogoPng.png') right bottom / 200px no-repeat fixed padding-box padding-box");
    $("div.container-fluid").addClass("p-3")
    $("h2").each(function () {
        $(this).addClass("mb-0");
        $(this).parent("div.card-header").addClass("py-2");
        $(this).children("button").addClass("btn btn-link btn-block text-left").attr({ "type": "button", "data-toggle": "collapse" });
    });
    $("div[id^='collapse']").attr("data-parent", "#accordionApp");
    $("div.card-body:eq(0)").each(function () {
        $(this).children("h5").addClass("card-title");
        $(this).children("p").addClass("card-text");
        $(this).find("var").addClass("font-weight-bold px-1");
        $(this).find("span:not(.fi)").addClass("font-italic");
    });
    $("div.alert").each(function () {
        $(this).attr("role", "alert");
        $(this).children("h4").addClass("alert-heading");
        $(this).children("p").addClass("mb-0");
    });
    $("div.alert:eq(0)").each(function () {
        $(this).addClass("alert-primary");
        $(this).find("span.fi").addClass("align-middle mx-1");
    });
    $("div.alert:eq(1)").each(function () {
        $(this).addClass("alert-info");
    });
    $("hr").addClass("my-2");
    $("figure").each(function () {
        $(this).children("img").height(200).attr("alt", "ADR Listica").addClass("d-block mx-auto mb-n3");
        $(this).children("figcaption").addClass("text-center font-italic");
    });
    $("div.card-footer").each(function () {
        $(this).addClass("text-muted py-1");
        $(this).children("p").addClass("mb-0 small text-center");
        $(this).find("img, object").addClass("align-middle px-1");
        $(this).find("span").html("&copy; 2019 - " + new Date().getFullYear() + ".");
    });
    //$("div.input-group").addClass("mb-3");
    $("div.input-group").slice(2, 4).tooltip({
        placement: 'top',
        title: 'U ovo polje se unosi pozitivni cijeli broj.'
    });
    $("div.input-group").slice(4, 6).tooltip({
        placement: 'top',
        title: 'U ovo polje se unosi pozitivni ili negativni cijeli broj.'
    });
    $("div.input-group").each(function () {
        $(this).addClass("mb-3");
        $(this).children("div").addClass("input-group-prepend");
    });
    $("div.input-group-prepend").children("span").addClass("input-group-text");
    $("select, input").addClass("form-control").attr("required", "");
    $("input[type='number']").attr("inputmode", "numeric");
    $("input#mr, input#tp").attr({ "min": "1", "skip": "1" });
    $("input#ts, input#tpr").attr({ "min": "-50", "max": "50", "step": "1", "pattern": "-?[0-9]{2}" });
    $("button.btn-primary").on("click", function () {
        var a = $("#vrs").val();
        var b = $("#gd").val();
        var c = Number($("#mr").val());
        var d = Number($("#tp").val());
        var e = Number($("#ts").val());
        var f = Number($("#tpr").val());
        var g = $("#str").val();

        if (c <= 0 || !Number.isInteger(c) || d <= 0 || !Number.isInteger(d) || e <= "-51" || e >= "51" || !Number.isInteger(e) || f <= "-51" || f >= "51" || !Number.isInteger(f)) {
            alert("Unos nije dozvoljen.\nMolimo vas da pažljivo pročitate uputstvo.");
        } else {

            var j = e - f; /* j - temperaturna razlika (razlika između spoljne temperature i temperature proizvoda)*/

            var q1 = 860 * j;
            var q11 = q1 / a;

            if (f <= 4) {
                var q22 = 0;
            } else {
                var q2 = c * g * j;
                var q22 = q2 / a;
            }

            var q3 = 115 * 0.32 * j * d;
            var q33 = q3 / a

            if (e > 5 && e <= 15) {
                var q41 = c * 200 * d;
            } else if (e >= 16 && e <= 30) {
                var q41 = c * 2500 * d;
            } else {
                var q41 = c * 6000 * d;
            }

            var q42 = 1000 * 24;
            var q4 = q41 / q42;

            if (f <= -7 && f >= -18) {
                var q43 = 0;
            } else {
                var q43 = q4 / a;
            }

            var l = +q11.toFixed(0) + +q22.toFixed(0) + +q33.toFixed(0) + +q43.toFixed(0);

            if (e >= 20 && b == 0.06) {
                lu = l * b;
                l1 = l + lu;
                $("#rezultat6").text("Potrebna količina rashladnog sredstva, koja je uvećana za 6% u ljetnim mjesecima, iznosi " + l1.toFixed(0) + "[kg].").addClass("mb-sm-1");
            }

            $("#rezultat").text("Potrebna količina rashadnog sredstva za hlađenje vagona hladnjače je " + q11.toFixed(0) + " [kg].").addClass("mb-sm-1");

            if (q22 != 0) {
                $("#rezultat2").text("Potrebna količina rashadnog sredstva za hlađenje robe je " + q22.toFixed(0) + " [kg].").addClass("mb-sm-1");
            } else {
                $("#rezultat2").text("Nije potrebno računari koliko je potrebno rashladnog sredstva za hlađenje robe, jer je roba prethodno ohlađena.").addClass("mb-sm-1");
            }

            $("#rezultat3").text("Potrebna količina rashadnog sredstva za uticaj spoljne temperature je " + q33.toFixed(0) + " [kg].").addClass("mb-sm-1");

            if (q43 != 0) {
                $("#rezultat4").text("Potrebna količina rashadnog sredstva za uticaj disanja robe je " + q43.toFixed(0) + " [kg].").addClass("mb-sm-1");
            } else if (q43 = 0 && f <= -19 && f >= -40) {
                $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u brzo smrznutom stanju &quot;ne diše&quot;.").addClass("mb-sm-1");
            } else {
                $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u smrznutom stanju &quot;ne diše&quot;.").addClass("mb-sm-1");
            }

            $("#rezultat5").text("Potrebna količina rashladnog sredstva iznosi " + l + "[kg].").addClass("mb-sm-1");
        }
    }).attr("type", "button");
    $("select#ibo").on("click", function prikazi(a) {
        var textADRhin;
        var a = $("#ibo").val();

        if (a == 1) {
            textADRhin = "Zagušljivač ili gas bez dodatne opasnosti.";
        } else if (a == 2) {
            textADRhin = "Pothlađeni ukapljeni gas, zagušljivač.";
        } else if (a == 3) {
            textADRhin = "Pothlađeni ukapljeni gas, zapaljiv.";
        } else if (a == 4) {
            textADRhin = "Pothlađeni ukapljeni gas, oksidirajući (pojačava vatru).";
        } else if (a == 5) {
            textADRhin = "Zapaljivi gas.";
        } else if (a == 6) {
            textADRhin = "Zapaljivi gas, koji može spontano dovesti do burne reakcije.";
        } else if (a == 7) {
            textADRhin = "Oksidirajući (pojačava vatru).";
        } else if (a == 8) {
            textADRhin = "Otrovni gas.";
        } else if (a == 9) {
            textADRhin = "Otrovni gas, zapaljiv.";
        } else if (a == 10) {
            textADRhin = "Otrovni gas, oksidirajući (pojačava vatru).";
        } else if (a == 11) {
            textADRhin = "Otrovni gas, korozivni.";
        } else if (a == 12) {
            textADRhin = "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), ili zapaljiva tečnost ili čvrsta materija u otopljenom stanju sa tačkom paljenja iznad 60 &#8451;, zagrijana do temperature jednake ili iznad njene tačke paljenja, ili samozagrijavajuća tečnost.";
        } else if (a == 13) {
            textADRhin = "Zapaljiva tečnost koja reaguje s vodom, ispuštajući zapaljive gasove.";
        } else if (a == 14) {
            textADRhin = "Zapaljiva tečnost koja reaguje opasno s vodom, ispuštajući zapaljive gasove.";
        } else if (a == 15) {
            textADRhin = "Jako zapaljiva tečnost (tačka paljenja ispod 23 &#8451;).";
        } else if (a == 16) {
            textADRhin = "Piroforna tečnost.";
        } else if (a == 17) {
            textADRhin = "Piroforna tečnost koja reaguje opasno sa vodom. *";
        } else if (a == 18) {
            textADRhin = "Jako zapaljiva tečnost, otrovna.";
        } else if (a == 19) {
            textADRhin = "Jako zapaljiva tečnost, korozivna.";
        } else if (a == 20) {
            textADRhin = "Jako zapaljiva tečnost, korozivna, koja reaguje opasno sa vodom. *";
        } else if (a == 21) {
            textADRhin = "Jako zapaljiva tečnost koja može spontano dovesti do burne reakcije.";
        } else if (a == 22) {
            textADRhin = "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo otrovna ili samozagrijavajuća tečnost, otrovna.";
        } else if (a == 23) {
            textADRhin = "Zapaljiva tečnost, otrovna, reaguje sa vodom, ispuštajući zapaljive gasove.";
        } else if (a == 24) {
            textADRhin = "Zapaljiva tečnost, otrovna, reagujući sa vodom, stvara zapaljive gasove. *";
        } else if (a == 25) {
            textADRhin = "Zapaljiva tečnost, otrovna, korozivna.";
        } else if (a == 26) {
            textADRhin = "Zapaljiva tečnost (tačka paljenja između 23 i 60 &#8451;, uključivo), slabo korozivna ili samozagrijavajuća tečnost, korozivna.";
        } else if (a == 27) {
            textADRhin = "Zapaljiva tečnost, korozivna, reaguje sa vodom, ispuštajući zapaljive gasove.";
        } else if (a == 28) {
            textADRhin = "Zapaljiva tečnost, korozivna, reagujući sa vodom, stvara zapaljive gasove. *";
        } else if (a == 29) {
            textADRhin = "Zapaljiva tečnost, može spontano dovesti do burne reakcije.";
        } else if (a == 30) {
            textADRhin = "Zapaljiva čvrsta ili samoreaktivna materija, ili samozagrijavajuća materija.";
        } else if (a == 31) {
            textADRhin = "Čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.";
        } else if (a == 32) {
            textADRhin = "Zapaljiva čvrsta materija koja reaguje opasno s vodom, ispuštajući zapaljive gasove. *";
        } else if (a == 33) {
            textADRhin = "Spontano zapaljiva (piroforna) čvrsta materija.";
        } else if (a == 34) {
            textADRhin = "Zapaljiva čvrsta materija, u otopljenom stanju pri povišenoj temperaturi.";
        } else if (a == 35) {
            textADRhin = "Zapaljiva čvrsta materija, otrovna, u otopljenom stanju, pri povišenoj temperaturi.";
        } else if (a == 36) {
            textADRhin = "Zapaljiva ili samozagrijavajuća čvrsta materija, otrovna.";
        } else if (a == 37) {
            textADRhin = "Otrovna čvrsta materija koja reaguje sa vodom, ispuštajući zapaljive gasove.";
        } else if (a == 38) {
            textADRhin = "Čvrsta materija koja reaguje opasno sa vodom, stvara otrovne gasove. *";
        } else if (a == 39) {
            textADRhin = "Zapaljiva ili samozagrijavajuća čvrsta materija, korozivna.";
        } else if (a == 40) {
            textADRhin = "Korozivna čvrsta materija koja reaguje sa vodom, stvara zapaljive gasove.";
        } else if (a == 41) {
            textADRhin = "Korozivna materija koja reaguje opasno sa vodom, stvara korozivne gasove. *";
        } else if (a == 42) {
            textADRhin = "Oksidirajuća materija (pojačava vatru).";
        } else if (a == 43) {
            textADRhin = "Zapaljivi organski peroksid.";
        } else if (a == 44) {
            textADRhin = "Jako oksidirajuća materija (pojačava vatru).";
        } else if (a == 45) {
            textADRhin = "Jako oksidirajuća materija, otrovna (pojačava vatru).";
        } else if (a == 46) {
            textADRhin = "Jako oksidirajuća materija, korozivna (pojačava vatru).";
        } else if (a == 47) {
            textADRhin = "Jako oksidirajuća materija, može spontano burno reagovati (pojačava vatru).";
        } else if (a == 48) {
            textADRhin = "Oksidirajuća materija, otrovna (pojačava vatru).";
        } else if (a == 49) {
            textADRhin = "Oksidirajuća materija, otrovna, korozivna (pojačava vatru).";
        } else if (a == 50) {
            textADRhin = "Oksidirajuća materija, korozivna (pojačava vatru).";
        } else if (a == 51) {
            textADRhin = "Oksidirajuća materija, može spontano dovesti do burne reakcije (pojačava vatru).";
        } else if (a == 52) {
            textADRhin = "Otrovna ili slabo otrovna materija.";
        } else if (a == 53) {
            textADRhin = "Zarazna materija.";
        } else if (a == 54) {
            textADRhin = "Otrovna tečnost, reaguje sa vodom, stvara zapaljive gasove.";
        } else if (a == 55) {
            textADRhin = "Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).";
        } else if (a == 56) {
            textADRhin = "Otrovna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), korozivna.";
        } else if (a == 57) {
            textADRhin = "Otrovna materija, zapaljiva (tačka paljenja ne iznad 60 &#8451;, uključivo), može spontano dovesti do burne reaklcije.";
        } else if (a == 58) {
            textADRhin = "Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano dovesti do burne reakcije.";
        } else if (a == 59) {
            textADRhin = "Korozivna ili slabo korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo), može spontano burno reagovati i koja reaguje opasno sa vodom. *";
        } else if (a == 60) {
            textADRhin = "Korozivna čvrsta materija, zapaljiva ili samozagrijavajća.";
        } else if (a == 61) {
            textADRhin = "Korozivna čvrsta materija, reaguje sa vodom, stvara zapaljive gasove.";
        } else if (a == 62) {
            textADRhin = "Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru).";
        } else if (a == 63) {
            textADRhin = "Korozivna ili slabo korozivna materija, oksidirajuća (pojačava vatru), i otrovna.";
        } else if (a == 64) {
            textADRhin = "Korozivna ili slabo korozivna materija, otrovna.";
        } else if (a == 65) {
            textADRhin = "Jako korozivna materija.";
        } else if (a == 66) {
            textADRhin = "Jako korozivna materija, reaguje opasno sa vodom. *";
        } else if (a == 67) {
            textADRhin = "Jako korozivna materija, zapaljiva (tačka paljenja između 23 i 60 &#8451;, uključivo).";
        } else if (a == 68) {
            textADRhin = "Jako korozivna čvrsta materija, zapaljiva ili samozagrijavajuća.";
        } else if (a == 69) {
            textADRhin = "Jako korozivna materija, oksidirajuća (pojačava vatru).";
        } else if (a == 70) {
            textADRhin = "Jako korozivna materija, otrovna.";
        } else if (a == 71) {
            textADRhin = "Jako korozivna materija, otrovna, reaguje opasno sa vodom. *";
        } else if (a == 72) {
            textADRhin = "Korozivna ili slabo korozivna materija, može spontano dovesti do burne reakcije.";
        } else if (a == 73) {
            textADRhin = "Materija opasna za okolinu; razne opasne materije.";
        } else if (a == 74) {
            textADRhin = "Razne opasne materije, transportuju se na povišenoj temperaturi.";
        } else {
            textADRhin = "";
        }
        return $("p.card-text").last().addClass("my-3").html(textADRhin);
    }).addClass("form-control");
});
