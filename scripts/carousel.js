document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 8000,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: false,
      padding: '10%',
      throttle: 300,
      breakpoints: {
        1440: {
          perPage: 1,
          padding: '30%'
        },
        768: {
          perPage: 1,
          padding: '10%'
        }
      }
    }).mount();
  });
  
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#gift-carousel', {
      type: 'slide',
      perPage: 2,
      arrows: false,
      breakpoints: {
        768: {
          perPage: 1,
          padding: '10%'
        }
      }
    }).mount();
  });