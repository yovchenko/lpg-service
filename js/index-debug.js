'use strict';
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
var font = new FontFaceObserver('Qwigley',{
    weight: 400
});
  font.load().then(function () {
        document.getElementsByClassName('company-name')[0].className += " loaded";
  }, function () {
        document.getElementsByClassName('company-name')[0].className += " error";
  });