"use strict";
document.addEventListener('DOMContentLoaded',function(e){
    document.getElementsByClassName("company-name")[0].className += " loaded";
});
var el = $('.menuButton'),
    s = $('.breadcrumbs'),
    flag = false;
function clickFunction() {
    if (!(el.hasClass('active'))) {
        el.addClass("active"), 
        s.addClass("responsive").stop(!0, !0).slideDown();
    } else el.removeClass("active"), 
    s.removeClass("responsive").stop(!0, !0).slideUp();
}

var mql = window.matchMedia('(min-width: 831px)');
function screenTest(e) {
  if (e.matches) {
    if(s.hasClass('responsive')) flag = true;
    else flag = false;
    s.css("display", "block");
  } else {
      if(flag) {
          s.addClass("responsive").css("display", "block");
          flag = false;
      }
      else s.css("display", "none");
   }
}
mql.addListener(screenTest);
