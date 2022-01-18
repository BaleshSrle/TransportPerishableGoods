function izracunaj() {
    var a = $("#vrs").val();
    var b = $("#gd").val();
    var c = $("#mr").val();
    var d = $("#tp").val();
    var e = $("#ts").val();
    var f = $("#tpr").val();
    var g = $("#str").val();

    if (c <= 0 || c == "e" ||  d <= 0 || d == "e" || e == "e" || f == "e" ) {
        alert("Unos nije dozvoljen.\nMolimo vas da pažljivo pročitate uputstvo.");
    }
    
    if (f < -50 || f > 50 || e < -50 || e > 50) {
        alert("Unos nije dozvoljen.\nDozvoljena vrednost je u rasponu između -50 i +50.");
    }
    
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
    } else if (e >= 16 && e <=30) {
        var q41 = c * 2500 * d;
    } else {
        var q41 = c * 6000 * d;
    }

    var q42 = 1000 * 24;
    var q4 = q41 / q42;

    if (f <= -7 && f >=-18 ) {
        var q43 = 0;
    } else {
        var q43 = q4 / a;
    }

    var l = +q11.toFixed(0) + +q22.toFixed(0) + +q33.toFixed(0) + +q43.toFixed(0);
    
    if (e >= 20 && b == 0.06) {
        lu = l * b;
        l1 = l + lu;
        $("#rezultat6").html("Potrebna količina rashladnog sredstva, koja je uvećana za 6% u ljetnim mjesecima, iznosi " + l1.toFixed(0) + "[kg].");
    }

        $("#rezultat").html("Potrebna količina rashadnog sredstva za hlađenje vagona hladnjače je " + q11.toFixed(0) + " [kg].");

        if (q22 != 0) {
            $("#rezultat2").html("Potrebna količina rashadnog sredstva za hlađenje robe je " + q22.toFixed(0) + " [kg].");
        } else {
            $("#rezultat2").html("Nije potrebno računari koliko je potrebno rashladnog sredstva za hlađenje robe, jer je roba prethodno ohlađena.");
        }

        $("#rezultat3").html("Potrebna količina rashadnog sredstva za uticaj spoljne temperature je " + q33.toFixed(0) + " [kg].");

        if (q43 != 0) {
            $("#rezultat4").html("Potrebna količina rashadnog sredstva za uticaj disanja robe je " + q43.toFixed(0) + " [kg].");
        } else if (q43 = 0 && f <= -19 && f >= -40) {
            $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u brzo smrznutom stanju &quot;ne diše&quot;.");
        } else {
            $("#rezultat4").html("Nije potrebno računati potrebnu količinu rashladnog sredstva za uticaj disanja robe, jer roba u smrznutom stanju &quot;ne diše&quot;.");
        }
        
        $("#rezultat5").html("Potrebna količina rashladnog sredstva iznosi " + l + "[kg].");
}