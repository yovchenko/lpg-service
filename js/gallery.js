$(document).ready(function(){
    // Activate Carousel
    var $carousel =  $("#carousel-cars");
    $carousel.carousel();
    $carousel.carousel({
        interval: 0,
        pause: "false",
        wrap: true
    });
(function smokeText () {
var paragraph = document.getElementsByClassName("smoke")[0];
var $smoke = $('.smoke');
var $span = $('.smoke span');
var txt = "BMW-1";
var dataArr = [];
$carousel.on('slide.bs.carousel', function () {
    dataArr = txt.split('');
    paragraph.innerHTML = '';
    for(var i = 0;i < dataArr.length;i++) {
    paragraph.innerHTML += "<span>"+dataArr[i]+"</span>";
    }
    $smoke.addClass('smokeActive');
});
$carousel.on('slid.bs.carousel',function () {
    $smoke.removeClass('smokeActive');
    var num = $(this).find('.active').index();
    switch(num) {
        case 0: txt = 'BMW-1'
        break;
        case 1: txt = 'BMW-2' 
        break;
        case 2: txt = 'Sonata-1'
        break;
        case 3: txt = 'Sonata-2' 
        break;
        case 4: txt = 'Sonata-3'
        break;
        case 5: txt = 'Vitara-1' 
        break;
        case 6: txt = 'Vitara-2' 
        break;
    }
    dataArr = txt.split('');
    paragraph.innerHTML = '';
    for(var i = 0;i < dataArr.length;i++) {
    paragraph.innerHTML += "<span>"+dataArr[i]+"</span>";
    }
});
}());
});
