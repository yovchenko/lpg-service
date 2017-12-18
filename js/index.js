function myFunction() {
var menu = document.getElementById("menuToggle");
var $nav = $(".breadcrumbs");
if (menu.className === "menuButton") {
    menu.className += " active";
    $nav.addClass("responsive");
    var style = $(".responsive").stop(true, true).slideDown();
} else {
    menu.className = "menuButton";
    style = $(".responsive").stop(true, true).slideUp();
}
}



