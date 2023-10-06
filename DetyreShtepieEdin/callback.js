
function vlersimi(nota, callback) {
    console.log("Nota eshte: " + nota);
    callback(nota); 
}

function notimi(nota) {
    if (nota >= 5) {
        console.log("Studenti ka kaluar me sukses!");
    } else {
        console.log("Studenti nuk ka kaluar.");
    }
}

vlersimi(5, notimi);