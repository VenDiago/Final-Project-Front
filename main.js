window.onload = function () {

    $(document).ready(function () {
        $('#close-btn').click(function () {
            $('#search-overlay').fadeOut();
            $('.search-btn').show();
        });
        $('.search-btn').click(function () {
            //   $(this).hide();
            $('#search-overlay').fadeIn();
        });
    });



    jQuery(document).ready(function ($) {
        //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
        var $L = 1200,
            $menu_navigation = $('#main-nav'),
            $cart_trigger = $('#cd-cart-trigger'),
            $lateral_cart = $('#cd-cart'),
            $shadow_layer = $('#cd-shadow-layer');
        let bold_color = document.getElementById("shop-bg");
        let rm_search = document.getElementById("rm_search")
        // let rm_x_butn = document.getElementById("shop-bg")
        // let orxan = document.getElementById("orxan")



        //open lateral menu on mobile


        //open cart
        $cart_trigger.on('click', function (event) {
            event.preventDefault();
            //close lateral menu (if it's open)
            $menu_navigation.removeClass('speed-in');
            toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
            bold_color.classList.add('cd-cart-block');
            rm_search.classList.remove('btn-search');
            rm_search.classList.remove('bi-search');

        });

        //close lateral cart or lateral menu
        $shadow_layer.on('click', function () {
            $shadow_layer.removeClass('is-visible');
            // rm_x_butn.removeChild(rm_x_butn.firstChild);
            // orxan.removeChild(rm_x_butn.firstChild);

            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        });

    });

    function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
        if ($lateral_panel.hasClass('speed-in')) {
            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $body.removeClass('overflow-hidden');
            });
            $background_layer.removeClass('is-visible');

        } else {
            $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $body.addClass('overflow-hidden');
            });
            $background_layer.addClass('is-visible');
        }
    }


    // navbar scroll Desktop Start

    let navbar = document.getElementById("main-nav-2");
    let scrollsize = document.getElementById("when-scroll");
    let addscroll_dw1 = document.getElementById("dw-home")
    let addscroll_dw2_1 = document.getElementById("dw-page1")
    let addscroll_dw2_2 = document.getElementById('dw-page2')
    let addscroll_dw2_3 = document.getElementById('dw-page3')
    let addscroll_dw2_4 = document.getElementById('dw-page4')
    let addscroll_dw3 = document.getElementById('dw-shop')
    let addscroll_dw4 = document.getElementById('dw-blog')



    let navPos = navbar.getBoundingClientRect().top;

    window.addEventListener("scroll", e => {
        let scrollPos = window.scrollY;
        if (scrollPos > navPos) {
            navbar.classList.add('sticky');
            scrollsize.classList.add('navbarOffsetMargin');
            addscroll_dw1.classList.add('dd-custm-home');
            addscroll_dw2_1.classList.add('dd-custm-page1')
            addscroll_dw2_2.classList.add('dd-custm-page2')
            addscroll_dw2_3.classList.add('dd-custm-page3')
            addscroll_dw2_4.classList.add('dd-custm-page4')
            addscroll_dw3.classList.add('dd-custm-shop');
            addscroll_dw4.classList.add('dd-custm-blog');


        } else {
            navbar.classList.remove('sticky');
            scrollsize.classList.remove('navbarOffsetMargin');
            addscroll_dw1.classList.remove('dd-custm-home');
            addscroll_dw2_1.classList.remove('dd-custm-page1');
            addscroll_dw2_2.classList.remove('dd-custm-page2')
            addscroll_dw2_3.classList.remove('dd-custm-page3');
            addscroll_dw2_4.classList.remove('dd-custm-page4');
            addscroll_dw3.classList.remove('dd-custm-shop');
            addscroll_dw4.classList.remove('dd-custm-blog');

        }
    });

    // navbar scroll Desktop End.
    


    $('.ourproduct-carousel').owlCarousel({
      loop: true,
      margin:45,
      nav: false,
      dots: false,
      autoplay:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 4
        }
      }
    })


    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay:false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })

      $('.topseller-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 2
          }
        }
      })

      $('.brand-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay:false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })


      $('.mobile-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 1
          }
        }
      })





}












