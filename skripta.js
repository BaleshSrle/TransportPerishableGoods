function izracunaj() {
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
            $("#rezultat6").text("Potrebna količina rashladnog sredstva, koja je uvećana za 6% u ljetnim mjesecima, iznosi " + l1.toFixed(0) + "[kg].");
        }

        $("#rezultat").text("Potrebna količina rashadnog sredstva za hlađenje vagona hladnjače je " + q11.toFixed(0) + " [kg].");

        if (q22 != 0) {
            $("#rezultat2").text("Potrebna količina rashadnog sredstva za hlađenje robe je " + q22.toFixed(0) + " [kg].");
        } else {
            $("#rezultat2").text("Nije potrebno računari koliko je potrebno rashladnog sredstva za hlađenje robe, jer je roba prethodno ohlađena.");
        }

        $("#rezultat3").text("Potrebna količina rashadnog sredstva za uticaj spoljne temperature je " + q33.toFixed(0) + " [kg].");

        if (q43 != 0) {
            $("#rezultat4").text("Potrebna količina rashadnog sredstva za uticaj disanja robe je " + q43.toFixed(0) + " [kg].");
        } else if (q43 = 0 && f <= -19 && f >= -40) {
            $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u brzo smrznutom stanju &quot;ne diše&quot;.");
        } else {
            $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u smrznutom stanju &quot;ne diše&quot;.");
        }

        $("#rezultat5").text("Potrebna količina rashladnog sredstva iznosi " + l + "[kg].");
    }
}