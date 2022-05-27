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
            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            if ($lateral_cart.hasClass('speed-in')) {
                $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                });
                $menu_navigation.removeClass('speed-in');
            } else {
                $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('body').removeClass('overflow-hidden');
                });
                $lateral_cart.removeClass('speed-in');
            }
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


    // navbar scroll

    let navbar = document.getElementById("main-nav-2");
    let scrollsize = document.getElementById("when-scroll");


    let navPos = navbar.getBoundingClientRect().top;

    window.addEventListener("scroll", e => {
        let scrollPos = window.scrollY;
        if (scrollPos > navPos) {
            navbar.classList.add('sticky');
            scrollsize.classList.add('navbarOffsetMargin');

        } else {
            navbar.classList.remove('sticky');
            scrollsize.classList.remove('navbarOffsetMargin');

        }
    });

}



