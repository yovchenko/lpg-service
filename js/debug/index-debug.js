"use strict";
document.addEventListener('DOMContentLoaded',function(event){
    document.getElementsByClassName("company-name")[0].className += " loaded";
});
var navicon = $('.menuButton'),
    navbar = $('.breadcrumbs'),
    flag = false;
function clickFunction() {
    if (!(navicon.hasClass('active'))) {
        navicon.addClass("active"), 
        navbar.addClass("responsive").stop(!0, !0).slideDown();
    } else navicon.removeClass("active"), 
    navbar.removeClass("responsive").stop(!0, !0).slideUp();
}

var mql = window.matchMedia('(min-width: 831px)');
function screenTest(e) {
  if (e.matches) {
    if(navbar.hasClass('responsive')) flag = true;
    else flag = false;
    navbar.css("display", "block");
  } else {
      if(flag) {
          navbar.addClass("responsive").css("display", "block");
          flag = false;
      }
      else navbar.css("display", "none");
   }
}

mql.addEventListener("change", function (e) {
    screenTest(e)
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.info('ServiceWorker registration successful!');
    }).catch(function(err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  }