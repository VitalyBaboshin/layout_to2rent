$(document).ready(function(){
    $('.slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="image/icons/arrow_right.svg" alt="prev arrow"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="image/icons/arrow_left.svg" alt="next arrow"></button>',
         // arrows: true
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
        // autoplay: 3000
    });
});