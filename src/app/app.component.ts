import { Component, OnInit } from '@angular/core';

declare const jQuery: any;
// declare const $: any;
declare const google: any;
declare const StickySidebar: any;
// declare const noUiSlider: any;

@Component({
  selector: 'praia-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    (($) => {
      'use strict';
      // const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      const isMobile = {
        Android: () => {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: () => {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: () => {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: () => {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: () => {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: () => {
          return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
          );
        },
      };

      function parallax() {
        $('.bg--parallax').each(function() {
          const el = $(this);
          const xpos = '50%';
          const windowHeight = $(window).height();
          if (isMobile.any()) {
            $(this).css('background-attachment', 'scroll');
          } else {
            $(window).scroll(() => {
              const current = $(window).scrollTop();
              const top = el.offset().top;
              const height = el.outerHeight();
              if (
                top + height < current ||
                top > current + windowHeight
              ) {
                return;
              }
              el.css(
                'backgroundPosition',
                xpos + ' ' + Math.round((top - current) * 0.2) + 'px'
              );
            });
          }
        });
      }

      // function backgroundImage() {
      //   const databackground = $('[data-background]');
      //   databackground.each(function() {
      //     if ($(this).attr('data-background')) {
      //       const image_path = $(this).attr('data-background');
      //       $(this).css({
      //         background: 'url(' + image_path + ')',
      //       });
      //     }
      //   });
      // }

      // function siteToggleAction() {
      //   const navSidebar = $('.navigation--sidebar'),
      //     filterSidebar = $('.ps-filter--sidebar');
      //   $('.menu-toggle-open').on('click', function(e) {
      //     e.preventDefault();
      //     $(this).toggleClass('active');
      //     navSidebar.toggleClass('active');
      //     $('.ps-site-overlay').toggleClass('active');
      //   });

      //   $('.ps-toggle--sidebar').on('click', function(e) {
      //     e.preventDefault();
      //     const url = $(this).attr('href');
      //     $(this).toggleClass('active');
      //     $(this)
      //       .siblings('a')
      //       .removeClass('active');
      //     $(url).toggleClass('active');
      //     $(url)
      //       .siblings('.ps-panel--sidebar')
      //       .removeClass('active');
      //     $('.ps-site-overlay').toggleClass('active');
      //   });

      //   $('#filter-sidebar').on('click', function(e) {
      //     e.preventDefault();
      //     filterSidebar.addClass('active');
      //     $('.ps-site-overlay').addClass('active');
      //   });

      //   $('.ps-filter--sidebar .ps-filter__header .ps-btn--close').on(
      //     'click',
      //     function(e) {
      //       e.preventDefault();
      //       filterSidebar.removeClass('active');
      //       $('.ps-site-overlay').removeClass('active');
      //     }
      //   );

      //   $('body').on('click', function(e) {
      //     if (
      //       $(e.target)
      //         .siblings('.ps-panel--sidebar')
      //         .hasClass('active')
      //     ) {
      //       $('.ps-panel--sidebar').removeClass('active');
      //       $('.ps-site-overlay').removeClass('active');
      //     }
      //   });
      // }

      // function subMenuToggle() {
      //   $('.menu--mobile .menu-item-has-children > .sub-toggle').on(
      //     'click',
      //     function(e) {
      //       e.preventDefault();
      //       const current = $(this).parent('.menu-item-has-children');
      //       $(this).toggleClass('active');
      //       current
      //         .siblings()
      //         .find('.sub-toggle')
      //         .removeClass('active');
      //       current.children('.sub-menu').slideToggle(350);
      //       current
      //         .siblings()
      //         .find('.sub-menu')
      //         .slideUp(350);
      //       if (current.hasClass('has-mega-menu')) {
      //         current.children('.mega-menu').slideToggle(350);
      //         current
      //           .siblings('.has-mega-menu')
      //           .find('.mega-menu')
      //           .slideUp(350);
      //       }
      //     }
      //   );
      //   $('.menu--mobile .has-mega-menu .mega-menu__column .sub-toggle').on(
      //     'click',
      //     function(e) {
      //       e.preventDefault();
      //       const current = $(this).closest('.mega-menu__column');
      //       $(this).toggleClass('active');
      //       current
      //         .siblings()
      //         .find('.sub-toggle')
      //         .removeClass('active');
      //       current.children('.mega-menu__list').slideToggle(350);
      //       current
      //         .siblings()
      //         .find('.mega-menu__list')
      //         .slideUp(350);
      //     }
      //   );
      //   const listCategories = $('.ps-list--categories');
      //   if (listCategories.length > 0) {
      //     $('.ps-list--categories .menu-item-has-children > .sub-toggle').on(
      //       'click',
      //       function(e) {
      //         e.preventDefault();
      //         const current = $(this).parent('.menu-item-has-children');
      //         $(this).toggleClass('active');
      //         current
      //           .siblings()
      //           .find('.sub-toggle')
      //           .removeClass('active');
      //         current.children('.sub-menu').slideToggle(350);
      //         current
      //           .siblings()
      //           .find('.sub-menu')
      //           .slideUp(350);
      //         if (current.hasClass('has-mega-menu')) {
      //           current.children('.mega-menu').slideToggle(350);
      //           current
      //             .siblings('.has-mega-menu')
      //             .find('.mega-menu')
      //             .slideUp(350);
      //         }
      //       }
      //     );
      //   }
      // }

      // function stickyHeader() {
      //   const header = $('.header'),
      //     scrollPosition = 0,
      //     checkpoint = 50;
      //   header.each(function() {
      //     if ($(this).data('sticky') === true) {
      //       const el = $(this);
      //       $(window).scroll(function() {
      //         const currentPosition = $(this).scrollTop();
      //         if (currentPosition > checkpoint) {
      //           el.addClass('header--sticky');
      //         } else {
      //           el.removeClass('header--sticky');
      //         }
      //       });
      //     }
      //   });

      //   const stickyCart = $('#cart-sticky');
      //   if (stickyCart.length > 0) {
      //     $(window).scroll(function() {
      //       const currentPosition = $(this).scrollTop();
      //       if (currentPosition > checkpoint) {
      //         stickyCart.addClass('active');
      //       } else {
      //         stickyCart.removeClass('active');
      //       }
      //     });
      //   }
      // }

      // function owlCarouselConfig() {
      //   const target = $('.owl-slider');
      //   if (target.length > 0) {
      //     target.each(function() {
      //       const el = $(this),
      //         dataAuto = el.data('owl-auto'),
      //         dataLoop = el.data('owl-loop'),
      //         dataSpeed = el.data('owl-speed'),
      //         dataGap = el.data('owl-gap'),
      //         dataNav = el.data('owl-nav'),
      //         dataDots = el.data('owl-dots'),
      //         dataAnimateIn = el.data('owl-animate-in')
      //           ? el.data('owl-animate-in')
      //           : '',
      //         dataAnimateOut = el.data('owl-animate-out')
      //           ? el.data('owl-animate-out')
      //           : '',
      //         dataDefaultItem = el.data('owl-item'),
      //         dataItemXS = el.data('owl-item-xs'),
      //         dataItemSM = el.data('owl-item-sm'),
      //         dataItemMD = el.data('owl-item-md'),
      //         dataItemLG = el.data('owl-item-lg'),
      //         dataItemXL = el.data('owl-item-xl'),
      //         dataNavLeft = el.data('owl-nav-left')
      //           ? el.data('owl-nav-left')
      //           : "<i class='icon-chevron-left'></i>",
      //         dataNavRight = el.data('owl-nav-right')
      //           ? el.data('owl-nav-right')
      //           : "<i class='icon-chevron-right'></i>",
      //         duration = el.data('owl-duration'),
      //         datamouseDrag =
      //           el.data('owl-mousedrag') == 'on' ? true : false;
      //       if (
      //         target.children('div, span, a, img, h1, h2, h3, h4, h5, h5')
      //           .length >= 2
      //       ) {
      //         el.addClass('owl-carousel').owlCarousel({
      //           animateIn: dataAnimateIn,
      //           animateOut: dataAnimateOut,
      //           margin: dataGap,
      //           autoplay: dataAuto,
      //           autoplayTimeout: dataSpeed,
      //           autoplayHoverPause: true,
      //           loop: dataLoop,
      //           nav: dataNav,
      //           mouseDrag: datamouseDrag,
      //           touchDrag: true,
      //           autoplaySpeed: duration,
      //           navSpeed: duration,
      //           dotsSpeed: duration,
      //           dragEndSpeed: duration,
      //           navText: [dataNavLeft, dataNavRight],
      //           dots: dataDots,
      //           items: dataDefaultItem,
      //           responsive: {
      //             0: {
      //               items: dataItemXS,
      //             },
      //             480: {
      //               items: dataItemSM,
      //             },
      //             768: {
      //               items: dataItemMD,
      //             },
      //             992: {
      //               items: dataItemLG,
      //             },
      //             1200: {
      //               items: dataItemXL,
      //             },
      //             1680: {
      //               items: dataDefaultItem,
      //             },
      //           },
      //         });
      //       }
      //     });
      //   }
      // }

      function masonry($selector: any) {
        const masonry1 = $($selector);
        if (masonry1.length > 0) {
          if (masonry1.hasClass('filter')) {
            masonry1.imagesLoaded(() => {
              masonry1.isotope({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                isotope: {
                  columnWidth: '.grid-sizer',
                },
                filter: '*',
              });
            });
            const filters = masonry1
              .closest('.masonry-root')
              .find('.ps-masonry-filter > li > a');
            filters.on('click', function(e: any) {
              e.preventDefault();
              const selector = $(this).attr('href');
              filters.find('a').removeClass('current');
              $(this)
                .parent('li')
                .addClass('current');
              $(this)
                .parent('li')
                .siblings('li')
                .removeClass('current');
              $(this)
                .closest('.masonry-root')
                .find('.ps-masonry')
                .isotope({
                  itemSelector: '.grid-item',
                  isotope: {
                    columnWidth: '.grid-sizer',
                  },
                  filter: selector,
                });
              return false;
            });
          } else {
            masonry1.imagesLoaded(() => {
              masonry1.masonry({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
              });
            });
          }
        }
      }

      function mapConfig() {
        const map = $('#contact-map');
        if (map.length > 0) {
          map.gmap3({
            address: map.data('address'),
            zoom: map.data('zoom'),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
          })
            .marker((map1: any) => {
              return {
                position: map1.getCenter(),
                icon: 'img/marker.png',
              };
            })
            .infowindow({
              content: map.data('address'),
            })
            .then(function(infowindow: any) {
              const map1 = this.get(0);
              const marker = this.get(1);
              marker.addListener('click', () => {
                infowindow.open(map1, marker);
              });
            });
        } else {
          return false;
        }
      }

      // function slickConfig() {
      //   const product = $('.ps-product--detail');
      //   if (product.length > 0) {
      //     const primary = product.find('.ps-product__gallery'),
      //       second = product.find('.ps-product__constiants'),
      //       vertical = product
      //         .find('.ps-product__thumbnail')
      //         .data('vertical');
      //     primary.slick({
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       asNavFor: '.ps-product__constiants',
      //       fade: true,
      //       dots: false,
      //       infinite: false,
      //       arrows: primary.data('arrow'),
      //       prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
      //       nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>",
      //     });
      //     second.slick({
      //       slidesToShow: second.data('item'),
      //       slidesToScroll: 1,
      //       infinite: false,
      //       arrows: second.data('arrow'),
      //       focusOnSelect: true,
      //       prevArrow: "<a href='#'><i class='fa fa-angle-up'></i></a>",
      //       nextArrow: "<a href='#'><i class='fa fa-angle-down'></i></a>",
      //       asNavFor: '.ps-product__gallery',
      //       vertical: vertical,
      //       responsive: [
      //         {
      //           breakpoint: 1200,
      //           settings: {
      //             arrows: second.data('arrow'),
      //             slidesToShow: 4,
      //             vertical: false,
      //             prevArrow:
      //               "<a href='#'><i class='fa fa-angle-left'></i></a>",
      //             nextArrow:
      //               "<a href='#'><i class='fa fa-angle-right'></i></a>",
      //           },
      //         },
      //         {
      //           breakpoint: 992,
      //           settings: {
      //             arrows: second.data('arrow'),
      //             slidesToShow: 4,
      //             vertical: false,
      //             prevArrow:
      //               "<a href='#'><i class='fa fa-angle-left'></i></a>",
      //             nextArrow:
      //               "<a href='#'><i class='fa fa-angle-right'></i></a>",
      //           },
      //         },
      //         {
      //           breakpoint: 480,
      //           settings: {
      //             slidesToShow: 3,
      //             vertical: false,
      //             prevArrow:
      //               "<a href='#'><i class='fa fa-angle-left'></i></a>",
      //             nextArrow:
      //               "<a href='#'><i class='fa fa-angle-right'></i></a>",
      //           },
      //         },
      //       ],
      //     });
      //   }
      // }

      // function tabs() {
      //   $('.ps-tab-list  li > a ').on('click', function(e) {
      //     e.preventDefault();
      //     const target = $(this).attr('href');
      //     $(this)
      //       .closest('li')
      //       .siblings('li')
      //       .removeClass('active');
      //     $(this)
      //       .closest('li')
      //       .addClass('active');
      //     $(target).addClass('active');
      //     $(target)
      //       .siblings('.ps-tab')
      //       .removeClass('active');
      //   });
      //   $('.ps-tab-list.owl-slider .owl-item a').on('click', function(e) {
      //     e.preventDefault();
      //     const target = $(this).attr('href');
      //     $(this)
      //       .closest('.owl-item')
      //       .siblings('.owl-item')
      //       .removeClass('active');
      //     $(this)
      //       .closest('.owl-item')
      //       .addClass('active');
      //     $(target).addClass('active');
      //     $(target)
      //       .siblings('.ps-tab')
      //       .removeClass('active');
      //   });
      // }

      // function rating() {
      //   $('select.ps-rating').each(function() {
      //     const readOnly;
      //     if ($(this).attr('data-read-only') == 'true') {
      //       readOnly = true;
      //     } else {
      //       readOnly = false;
      //     }
      //     $(this).barrating({
      //       theme: 'fontawesome-stars',
      //       readonly: readOnly,
      //       emptyValue: '0',
      //     });
      //   });
      // }

      // function productLightbox() {
      //   const product = $('.ps-product--detail');
      //   if (product.length > 0) {
      //     $('.ps-product__gallery').lightGallery({
      //       selector: '.item a',
      //       thumbnail: true,
      //       share: false,
      //       fullScreen: false,
      //       autoplay: false,
      //       autoplayControls: false,
      //       actualSize: false,
      //     });
      //     if (product.hasClass('ps-product--sticky')) {
      //       $('.ps-product__thumbnail').lightGallery({
      //         selector: '.item a',
      //         thumbnail: true,
      //         share: false,
      //         fullScreen: false,
      //         autoplay: false,
      //         autoplayControls: false,
      //         actualSize: false,
      //       });
      //     }
      //   }
      //   $('.ps-gallery--image').lightGallery({
      //     selector: '.ps-gallery__item',
      //     thumbnail: true,
      //     share: false,
      //     fullScreen: false,
      //     autoplay: false,
      //     autoplayControls: false,
      //     actualSize: false,
      //   });
      //   $('.ps-video').lightGallery({
      //     thumbnail: false,
      //     share: false,
      //     fullScreen: false,
      //     autoplay: false,
      //     autoplayControls: false,
      //     actualSize: false,
      //   });
      // }

      function backToTop() {
        let scrollPos = 0;
        const element = $('#back2top');
        $(window).scroll(() => {
          const scrollCur = $(window).scrollTop();
          if (scrollCur > scrollPos) {
            // scroll down
            if (scrollCur > 500) {
              element.addClass('active');
            } else {
              element.removeClass('active');
            }
          } else {
            // scroll up
            element.removeClass('active');
          }

          scrollPos = scrollCur;
        });

        element.on('click', () => {
          $('html, body').animate(
            {
              scrollTop: '0px',
            },
            800
          );
        });
      }

      function modalInit() {
        const modal = $('.ps-modal');
        if (modal.length) {
          if (modal.hasClass('active')) {
            $('body').css('overflow-y', 'hidden');
          }
        }
        modal.find('.ps-modal__close, .ps-btn--close').on('click', function(e: any) {
          e.preventDefault();
          $(this)
            .closest('.ps-modal')
            .removeClass('active');
        });
        $('.ps-modal-link').on('click', function(e: any) {
          e.preventDefault();
          const target = $(this).attr('href');
          $(target).addClass('active');
          $('body').css('overflow-y', 'hidden');
        });
        $('.ps-modal').on('click', (event: any) => {
          if (!$(event.target).closest('.ps-modal__container').length) {
            modal.removeClass('active');
            $('body').css('overflow-y', 'auto');
          }
        });
      }

      function searchInit() {
        const searchbox = $('.ps-search');
        $('.ps-search-btn').on('click', (e: any) => {
          e.preventDefault();
          searchbox.addClass('active');
        });
        searchbox.find('.ps-btn--close').on('click', (e: any) => {
          e.preventDefault();
          searchbox.removeClass('active');
        });
      }

      // function countDown() {
      //   const time = $('.ps-countdown');
      //   time.each(function() {
      //     const el = $(this),
      //       value = $(this).data('time');
      //     const countDownDate = new Date(value).getTime();
      //     const timeout = setInterval(function() {
      //       const now = new Date().getTime(),
      //         distance = countDownDate - now;
      //       const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      //         hours = Math.floor(
      //           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      //         ),
      //         minutes = Math.floor(
      //           (distance % (1000 * 60 * 60)) / (1000 * 60)
      //         ),
      //         seconds = Math.floor((distance % (1000 * 60)) / 1000);
      //       el.find('.days').html(days);
      //       el.find('.hours').html(hours);
      //       el.find('.minutes').html(minutes);
      //       el.find('.seconds').html(seconds);
      //       if (distance < 0) {
      //         clearInterval(timeout);
      //         el.closest('.ps-section').hide();
      //       }
      //     }, 1000);
      //   });
      // }

      function productFilterToggle() {
        $('.ps-filter__trigger').on('click', function(e: any) {
          e.preventDefault();
          const el = $(this);
          el.find('.ps-filter__icon').toggleClass('active');
          el.closest('.ps-filter')
            .find('.ps-filter__content')
            .slideToggle();
        });
        if ($('.ps-sidebar--home').length > 0) {
          $('.ps-sidebar--home > .ps-sidebar__header > a').on(
            'click',
            function(e: any) {
              e.preventDefault();
              $(this)
                .closest('.ps-sidebar--home')
                .children('.ps-sidebar__content')
                .slideToggle();
            }
          );
        }
      }

      function mainSlider() {
        const homeBanner = $('.ps-carousel--animate');
        homeBanner.slick({
          autoplay: true,
          speed: 1000,
          lazyLoad: 'progressive',
          arrows: false,
          fade: true,
          dots: true,
          prevArrow: '<i class="slider-prev ba-back"></i>',
          nextArrow: '<i class="slider-next ba-next"></i>',
        });
      }

      function subscribePopup() {
        const subscribe = $('#subscribe');
        const time = subscribe.data('time');
        setTimeout(() => {
          if (subscribe.length > 0) {
            subscribe.addClass('active');
            $('body').css('overflow', 'hidden');
          }
        }, time);
        $('.ps-popup__close').on('click', function(e: any) {
          e.preventDefault();
          $(this)
            .closest('.ps-popup')
            .removeClass('active');
          $('body').css('overflow', 'auto');
        });
        $('#subscribe').on('click', (event: any) => {
          if (!$(event.target).closest('.ps-popup__content').length) {
            subscribe.removeClass('active');
            $('body').css('overflow-y', 'auto');
          }
        });
      }

      function stickySidebar() {
        const sticky = $('.ps-product--sticky');
        let stickySidebar1: any;
        let stickySidebar2: any;
        const checkPoint = 992;
        const windowWidth = $(window).innerWidth();
        if (sticky.length > 0) {
          stickySidebar1 = new StickySidebar(
            '.ps-product__sticky .ps-product__info',
            {
              topSpacing: 20,
              bottomSpacing: 20,
              containerSelector: '.ps-product__sticky',
            }
          );
          if ($('.sticky-2').length > 0) {
            stickySidebar2 = new StickySidebar(
              '.ps-product__sticky .sticky-2',
              {
                topSpacing: 20,
                bottomSpacing: 20,
                containerSelector: '.ps-product__sticky',
              }
            );
          }
          if (checkPoint > windowWidth) {
            stickySidebar1.destroy();
            stickySidebar2.destroy();
          }
        } else {
          return false;
        }
      }

      function accordion() {
        const accordion1 = $('.ps-accordion');
        accordion1.find('.ps-accordion__content').hide();
        $('.ps-accordion.active')
          .find('.ps-accordion__content')
          .show();
        accordion1.find('.ps-accordion__header').on('click', function(e: any) {
          e.preventDefault();
          if (
            $(this)
              .closest('.ps-accordion')
              .hasClass('active')
          ) {
            $(this)
              .closest('.ps-accordion')
              .removeClass('active');
            $(this)
              .closest('.ps-accordion')
              .find('.ps-accordion__content')
              .slideUp(350);
          } else {
            $(this)
              .closest('.ps-accordion')
              .addClass('active');
            $(this)
              .closest('.ps-accordion')
              .find('.ps-accordion__content')
              .slideDown(350);
            $(this)
              .closest('.ps-accordion')
              .siblings('.ps-accordion')
              .find('.ps-accordion__content')
              .slideUp();
          }
          $(this)
            .closest('.ps-accordion')
            .siblings('.ps-accordion')
            .removeClass('active');
          $(this)
            .closest('.ps-accordion')
            .siblings('.ps-accordion')
            .find('.ps-accordion__content')
            .slideUp();
        });
      }

      // function progressBar() {
      //   const progress = $('.ps-progress');
      //   progress.each(function(e) {
      //     const value = $(this).data('value');
      //     $(this)
      //       .find('span')
      //       .css({
      //         width: value + '%',
      //       });
      //   });
      // }

      // function select2Cofig() {
      //   $('select.ps-select').select2({
      //     placeholder: $(this).data('placeholder'),
      //     minimumResultsForSearch: -1,
      //   });
      // }

      // function carouselNavigation() {
      //   const prevBtn = $('.ps-carousel__prev'),
      //     nextBtn = $('.ps-carousel__next');
      //   prevBtn.on('click', function(e) {
      //     e.preventDefault();
      //     const target = $(this).attr('href');
      //     $(target).trigger('prev.owl.carousel', [1000]);
      //   });
      //   nextBtn.on('click', function(e) {
      //     e.preventDefault();
      //     const target = $(this).attr('href');
      //     $(target).trigger('next.owl.carousel', [1000]);
      //   });
      // }

      // function filterSlider() {
      //   const nonLinearSlider = document.getElementById('nonlinear');
      //   if (typeof nonLinearSlider != 'undefined' && nonLinearSlider != null) {
      //     noUiSlider.create(nonLinearSlider, {
      //       connect: true,
      //       behaviour: 'tap',
      //       start: [0, 1000],
      //       range: {
      //         min: 0,
      //         '10%': 100,
      //         '20%': 200,
      //         '30%': 300,
      //         '40%': 400,
      //         '50%': 500,
      //         '60%': 600,
      //         '70%': 700,
      //         '80%': 800,
      //         '90%': 900,
      //         max: 1000,
      //       },
      //     });
      //     const nodes = [
      //       document.querySelector('.ps-slider__min'),
      //       document.querySelector('.ps-slider__max'),
      //     ];
      //     nonLinearSlider.noUiSlider.on('update', function(values, handle) {
      //       nodes[handle].innerHTML = Math.round(values[handle]);
      //     });
      //   }
      // }

      function handleLiveSearch() {
        $('body').on('click', (e: any) => {
          if (
            $(e.target).closest('.ps-form--search-header') ||
            e.target.className === '.ps-form--search-header'
          ) {
            $('.ps-panel--search-result').removeClass('active');
          }
        });
        $('#input-search').on('keypress', () => {
          $('.ps-panel--search-result').addClass('active');
        });
      }

      $(() => {
        // backgroundImage();
        // owlCarouselConfig();
        // siteToggleAction();
        // subMenuToggle();
        masonry('.ps-masonry');
        productFilterToggle();
        // tabs();
        // slickConfig();
        // productLightbox();
        // rating();
        backToTop();
        // stickyHeader();
        mapConfig();
        modalInit();
        searchInit();
        // countDown();
        mainSlider();
        parallax();
        stickySidebar();
        accordion();
        // progressBar();
        // select2Cofig();
        // carouselNavigation();
        // $('[data-toggle="tooltip"]').tooltip();
        // filterSlider();
        handleLiveSearch();
        // $('.ps-product--quickview .ps-product__images').slick({
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   fade: true,
        //   dots: false,
        //   arrows: true,
        //   infinite: false,
        //   prevArrow: "<a href='#'><i class='fa fa-angle-left'></i></a>",
        //   nextArrow: "<a href='#'><i class='fa fa-angle-right'></i></a>",
        // });
      });

      // $('#product-quickview').on('shown.bs.modal', function(e) {
      //   $('.ps-product--quickview .ps-product__images').slick('setPosition');
      // });

      $(window).on('load', () => {
        $('body').addClass('loaded');
        subscribePopup();
      });
    })(jQuery);
  }
}

