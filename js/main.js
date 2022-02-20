$(document).ready(function() {

    // sticky top 
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('#navbar').addClass('active-nav');
            $('#navbar').addClass('change-logo');
            $('#navbarNav').removeClass('myNavbar');

        } else {
            $('#navbar').removeClass('active-nav');
            $('#navbar').removeClass('change-logo');
            $('#navbarNav').addClass('myNavbar');
        }
        // logo change 
        if ($('.navbar').hasClass('change-logo')) {
            $('.navbar .navbar-brand img').attr('src', './images/logo/oneshot-pink.png');
        } else {
            $('.navbar .navbar-brand img').attr('src', './images/logo/oneshot-white.png');
        }
    });

    // fa-bars
    $('.fa-stream').click(function() {
        $(this).toggleClass('fa-times');
    });

    

});

// counter js
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// swiper js 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



// .........................THE END ........................... 
