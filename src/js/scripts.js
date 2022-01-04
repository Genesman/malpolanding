/*  Banner Slide  */
var swiperBannerThumbs = new Swiper(".banner-slide-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiperBanner = new Swiper(".banner-slide", {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiperBannerThumbs,
    },
});

/* Banner Models */
var swiperModelThumbs = new Swiper(".model-slide-thumbs", {
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
var swiperModel = new Swiper(".model-slide-features", {
    loop: false,
    speed: 1000,
    spaceBetween: 20,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    thumbs: {
        swiper: swiperModelThumbs,
    },
});

// swiperModel.controller.control = swiperModelThumbs;
// swiperModelThumbs.controller.control = swiperModel;

/* Gallery */
var swiperGallery = new Swiper(".gallery-slide", {
    grabCursor: true,
    slidesPerView: 1,
    grid: {
        rows: 2,
        fill: 'row',
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

/* Sticky button */

window.addEventListener('scroll', (e) => {
    
    const last_known_scroll_position = window.scrollY;
    const formWrapper = document.getElementById("formWrapper");
    const stickyBtn = document.getElementById("stickyBtn"); 
    
    // if(stickyBtn.offsetTop < last_known_scroll_position){
    if(last_known_scroll_position > formWrapper.offsetTop + formWrapper.offsetHeight){
        stickyBtn.classList.add('sticky');
    } else {
        stickyBtn.classList.remove('sticky');
    }

});



/* Lightgallery */
$( '.swipebox' ).swipebox();
