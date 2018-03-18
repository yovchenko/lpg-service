"use strict";

function myFunction() {
    var e = document.getElementById("menuToggle"),
        s = $(".breadcrumbs");
    if ("menuButton" === e.className) {
        e.className += " active", s.addClass("responsive");
        $(".responsive").stop(!0, !0).slideDown()
    } else e.className = "menuButton", $(".responsive").stop(!0, !0).slideUp()
}
var font = new FontFaceObserver('Qwigley',{
    weight: 400
});
font.load('GasCentr', 1000).then(function () {
    document.getElementsByClassName("company-name")[0].className += " loaded"
}, function () {
    document.getElementsByClassName("company-name")[0].className += " error"
});