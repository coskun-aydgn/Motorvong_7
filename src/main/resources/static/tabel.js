$(function () {
    hentMotorvogn();

})
function hentMotorvogn() {
    $.get("henteMotorvogn",function (motorvogner) {
        console.log(motorvogner)
        formatMotorvogn(motorvogner);
    })
}
function formatMotorvogn(motorvogner) {
  let ut="<thead><tr><th>Person Nr</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th></tr></thead><tbody>";
    for (const motorvogn of motorvogner) {

        ut+="<tr><td>"+motorvogn.personnr+"</td><td>"+motorvogn.navn+"</td><td>"+motorvogn.adresse+
            "</td><td>"+motorvogn.kjennetegn+"</td><td>"+motorvogn.merke+"</td><td>"+motorvogn.type+"</td></tr>";
    }
    ut+="</tbody>"
    $("#tabel").html(ut);
}