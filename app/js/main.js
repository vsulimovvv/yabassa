window.addEventListener('DOMContentLoaded', () => {
  (function loadForm() {
    let inputs = document.querySelectorAll('.input-file-upload');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.previousElementSibling,
        labelVal = label.querySelector('.custom-file-upload small').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.custom-file-upload small').innerText =
            'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.custom-file-upload small').innerText = labelVal;
      });
    });
  })();

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Show Hide Password
  (function showHidePassword() {
    const formGroups = document.querySelectorAll('.form-wrap');

    formGroups.forEach((group) => {
      if (group) {
        group.addEventListener('click', (e) => {
          if (!e.target.closest('.btn-change-password')) return;

          const input = document.querySelectorAll('.input-pas');
          input.forEach((el) => {
            if (el.getAttribute('type') === 'password') {
              el.setAttribute('type', 'text');
            } else {
              el.setAttribute('type', 'password');
            }
          });
        });
      }
    });
  })();

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  // * ===== Accordion
  // const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  //   const filters = document.querySelectorAll(accordionControl);
  //   filters.forEach((el) => {
  //     if (el) {
  //       el.addEventListener('click', (e) => {
  //         const target = e.target.closest(accordion);
  //         const content = target.querySelector(accordionContent);
  //         target.classList.toggle('active');
  //         if (target.classList.contains('active')) {
  //           content.style.maxHeight = content.scrollHeight + '1px';
  //         } else {
  //           content.style.maxHeight = null;
  //         }
  //       });
  //     }
  //   });
  // };
  // toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + '1px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.categories__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 75,

      breakpoints: {
        315: {
          spaceBetween: 20,
        },
        576: {
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 50,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.products-slider__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 28,

        breakpoints: {
          315: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
        },
      });
    });
  })();

  (function handlesSlider() {
    const parent = document.querySelectorAll('.range-slider--price');

    parent.forEach((el) => {
      if (el) {
        const handlesSlider = el.querySelector('.range-slider__range');
        const minStep = el.querySelector('.range-slider__min');
        const maxStep = el.querySelector('.range-slider__max');
        const inputs = [minStep, maxStep];

        noUiSlider.create(handlesSlider, {
          start: [10000, 100000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [2500],
            max: [150000],
          },
          format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ',
          }),
        });

        handlesSlider.noUiSlider.on('update', function (values, handle) {
          inputs[handle].value = values[handle];
        });

        minStep.addEventListener('change', function () {
          handlesSlider.noUiSlider.set([this.value, null]);
        });

        maxStep.addEventListener('change', function () {
          handlesSlider.noUiSlider.set([null, this.value]);
        });
      }
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 10) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 10) {
        header.classList.add('scroll-header');
      }
    }
    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Show Search
  (function showSearch() {
    const menuBtn = document.querySelector('.search-btn');
    const menu = document.querySelector('.header-search');
    const menuCloseBtn = document.querySelector('.header-search__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
      });
    }
  })();

  // * ===== Show Filters Mobile
  (function showFiltersMobile() {
    const menuBtn = document.querySelector('.filters-btn');
    const menu = document.querySelector('.filters-mobile');
    const menuCloseBtn = document.querySelector('.filters-mobile__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
      });
    }
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();
});
