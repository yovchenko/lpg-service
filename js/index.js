function myFunction() {
var x = document.getElementById("menuToggle");
if (x.className === "menuButton") {
    x.className += " active";
    var $nav = $(".breadcrumbs");
    $nav.addClass("responsive");
    var style = $(".responsive").stop(true, true).slideDown();
} else {
    x.className = "menuButton";
    style = $(".responsive").stop(true, true).slideUp();
}
}



