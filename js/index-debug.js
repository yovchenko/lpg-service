"use strict";

function myFunction() {
    var e = document.getElementById("menuToggle"),
        s = $(".breadcrumbs");
    if ("menuButton" === e.className) {
        e.className += " active", s.addClass("responsive");
        $(".responsive").stop(!0, !0).slideDown()
    } else e.className = "menuButton", $(".responsive").stop(!0, !0).slideUp()
}

document.addEventListener('DOMContentLoaded',function(e){
    document.getElementsByClassName("company-name")[0].className += " loaded";
});


