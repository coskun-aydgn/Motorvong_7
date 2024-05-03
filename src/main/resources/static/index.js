$(function () {
    hentBiler();
    console.log("araba alma foksiyonu calisti")
})
function hentBiler() {
    $.get("henteBil",function (bils) {
        formatBiler(bils);
        console.log(bils)
    })
}
function formatBiler(bils) {
    let ut = "<select class='form-select' id='valgtMerke' onchange='finnType()'>";
    let lastMerke=""
    for (const bil of bils) {
        if(bil.merke!==lastMerke){
            ut+="<option>"+bil.merke+"</option>"
        }
        lastMerke=bil.merke;

    }
    ut+="</select>";
    $("#merke").html(ut);

}
function finnType() {
    let valtmerke=$("#valgtMerke").val();
    console.log(valtmerke)
    $.get("henteBil",function (bils) {
        formatType(bils, valtmerke);
    })
}
function formatType(bils, valtmerke){
    let ut = "<select class='form-select' id='valgtType'>";
    for (const bil of bils) {
        if(bil.merke===valtmerke){
            ut+="<option>"+bil.type+"</option>"
        }
    }
    ut+="</select>";
    $("#type").html(ut);
}