const slideContainerPricing = document.querySelector('.pricing__container');

window.addEventListener('resize', sliderHelped)
window.onload = sliderHelped()

function sliderHelped() {
    if(screen.width < 769.8 && slideContainerPricing.dataset.mobile == 'false') {
        swiperBenefit = new Swiper(".pricing__container", {
            wrapperClass: "pricing__wrapper",
            slideClass: "pricing-item",
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            centeredSlides: true,
        });
        slideContainerPricing.dataset.mobile = 'true'
    }
    if (screen.width > 770) {
        slideContainerPricing.dataset.mobile = 'false'
        if(slideContainerPricing.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}