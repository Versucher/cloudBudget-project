$('#demoDefaultSelection').ddslick({
    onSelected: function(selectedData) {
        //callback function: do something with selectedData;
    }
});


// $().ddslick({
//     data: ddData,
//     defaultSelectedIndex: 2
// });


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true
        // nav: true
    });
});


$(`.mobile-btn`).on('click', function() {
    $(`.mobile-btn`).toggleClass(`show-mobile-btn`);
    $(`.header__menu`).toggleClass(`show-header__menu`);
    $(`.header__link`).toggleClass(`show-header__link`);
})


new WOW().init();