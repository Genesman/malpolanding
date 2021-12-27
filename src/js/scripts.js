/*  Swiper  */
var swiperBannerThumbs = new Swiper(".banner-slide-thumbs", {
    spaceBetween: 0,
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