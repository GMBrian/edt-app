(function ($, window, document, undefined) {

    'use strict';

    $(function () {
        // FastShell

        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            width: '100%',
            height: '100%',
            margin: 0,
            controls: false,
            progress: false
        });

        Reveal.addEventListener('ready', function (event) {

            //console.log(event.indexh);

            if (event.indexh == 0) {
                $('img.footer-logo-menu').fadeOut(200, function () {
                        $(this).attr('src', 'assets/img/logo-ferring.png');
                        $(this).addClass('footer-logo');
                    })
                    .fadeIn(200);

                //$('img.element-ios-app-hand').fadeIn();
            }
            else {
                $('img.footer-logo-menu').fadeOut(200, function () {
                        $(this).attr('src', 'assets/img/logo-rekovelle-footer.png');
                        $(this).removeClass('footer-logo');
                        $(this).show();
                    })
                    .fadeIn(200);
                //$('img.element-ios-app-hand').hide();
            }

            //toggleFullScreen(document.body);
        });


        Reveal.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv

            //console.log($('img.footer-logo-menu').attr('src'));

            if (event.indexh == 0) {
                if ($('img.footer-logo-menu').attr('src') != 'assets/img/logo-ferring.png') {
                    $('img.footer-logo-menu').fadeOut(200, function () {
                            $(this).attr('src', 'assets/img/logo-ferring.png');
                            $(this).addClass('footer-logo');
                        })
                        .fadeIn(200);

                }

                //$('img.element-ios-app-hand').fadeIn();
            }
            else {
                if ($('img.footer-logo-menu').attr('src') != 'assets/img/logo-rekovelle-footer.png') {
                    $('img.footer-logo-menu').fadeOut(200, function () {
                            $(this).attr('src', 'assets/img/logo-rekovelle-footer.png');
                            $(this).removeClass('footer-logo');
                        })
                        .fadeIn(200);
                }
                //$('img.element-ios-app-hand').fadeOut();
            }

            $(event.currentSlide).find('.animated').each(function () {

                var elm = this;
                var newone = elm.cloneNode(true);
                elm.parentNode.replaceChild(newone, elm);

                // var newone = $(e).clone(true);
                //
                // $(e).before(newone);
                //
                // setTimeout(function () {
                //     $(e).remove();
                // }, 1000);


                // e.classList.remove('animated');
                //
                // e.classList.add('animated');

                //e.removeClass('.animated').addClass('animated bounceOutLeft');
            });

            if (event.indexh == 1) {
                //$('.element-1-dosing').addClass('animated delay-1s fadeIn');
            }

        });

        Reveal.addEventListener( 'slidechanged', function( event ) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv

            $('.tooltip-container').each(function() {
                $(this).fadeOut();
            });
        } );


        Reveal.addEventListener('fragmentshown', function (event) {
            // event.fragment = the fragment DOM element

            //console.log('fragmentshown: ' + event.indexh);
        });
        Reveal.addEventListener('fragmenthidden', function (event) {
            // event.fragment = the fragment DOM element

            //console.log('fragmenthidden: ' + event.indexh);
        });


        $('.footer-logo-menu-link').click(function () {
            $('#sidebar-menu').toggleClass('active');
            return false;
        });


        $('.sidebar-menu-list a').click(function () {
            $('#sidebar-menu').removeClass('active');
            //return false;
        });


        $('#sidebar-menu').click(function () {
            $('#sidebar-menu').removeClass('active');
            //return false;
        });
    });

    $('.element-icon-info').click(function () {
        var tooltipId = $(this).data('toolt');

        var offset = $(this).offset();

        //console.log(offset);
        //console.log($(this).position());

        var targetTooltip = $('#' + tooltipId);

        targetTooltip.find('.tooltip-close').css('max-width', $(this).width());

        targetTooltip.css({top: offset.top - 8, right: ($(window).width() - offset.left - $(this).width() - 8), position: 'absolute'});
        targetTooltip.show();

        return false;
    });

    $('.tooltip-close').click(function () {
        $(this).closest('.tooltip-container').hide();
        return false;
    });

    // function toggleFullScreen(elem) {
    //     // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    //     if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
    //         if (elem.requestFullScreen) {
    //             elem.requestFullScreen();
    //         } else if (elem.mozRequestFullScreen) {
    //             elem.mozRequestFullScreen();
    //         } else if (elem.webkitRequestFullScreen) {
    //             elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    //         } else if (elem.msRequestFullscreen) {
    //             elem.msRequestFullscreen();
    //         }
    //     } else {
    //         if (document.cancelFullScreen) {
    //             document.cancelFullScreen();
    //         } else if (document.mozCancelFullScreen) {
    //             document.mozCancelFullScreen();
    //         } else if (document.webkitCancelFullScreen) {
    //             document.webkitCancelFullScreen();
    //         } else if (document.msExitFullscreen) {
    //             document.msExitFullscreen();
    //         }
    //     }
    // }

})(jQuery, window, document);
