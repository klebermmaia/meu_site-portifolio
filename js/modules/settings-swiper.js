export default function initSettingsSwiper(){
  const swiper = new Swiper('.swiper', {
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: false,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    slidesPerView: "auto",
    speed: 500,
    
    coverflowEffect: {
      rotate: 0,
      stretch: -150,
      depth: 150,
      slideShadows: false,
    },
    mousewheel: false,
  });
}
