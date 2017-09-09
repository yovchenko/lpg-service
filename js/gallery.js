 // Activate Carousel
var $carousel =  $("#carousel-cars");
$carousel.carousel();
(function smokeText () {
var paragraph = document.getElementsByClassName("smoke")[0];
var $smoke = $('.smoke');
var $span = $('.smoke span');
var txt = "BMW-525";
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
        case 0: txt = 'BMW-525'
        break;
        case 1: txt = 'BMW-525' 
        break;
        case 2: txt = 'Honda CR-V'
        break;
        case 3: txt = 'Honda CR-V' 
        break;
        case 4: txt = 'Hummer'
        break;
        case 5: txt = 'Hummer' 
        break;
        case 6: txt = 'Hummer' 
        break;
        case 7: txt = 'Nissan Maxima'
        break;
        case 8: txt = 'Nissan Maxima' 
        break;
        case 9: txt = 'Opel Vectra'
        break;
        case 10: txt = 'Opel Vectra' 
        break;
        case 11: txt = 'Porsche Cayenne'
        break;
        case 12: txt = 'Porsche Cayenne' 
        break;
        case 13: txt = 'Porsche Cayenne' 
        break;
        case 14: txt = 'Subaru Outback'
        break;
        case 15: txt = 'Subaru Outback' 
        break;
    }
    dataArr = txt.split('');
    paragraph.innerHTML = '';
    for(var i = 0;i < dataArr.length;i++) {
    paragraph.innerHTML += "<span>"+dataArr[i]+"</span>";
    }
});
}());



