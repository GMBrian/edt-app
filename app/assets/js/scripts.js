/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
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

        Reveal.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv

            console.log($('img.footer-logo-menu').attr('src'));

            if (event.indexh == 0) {
                if ($('img.footer-logo-menu').attr('src') != 'assets/img/logo-ferring.png') {
                    $('img.footer-logo-menu').fadeOut(200, function () {
                            $(this).attr('src', 'assets/img/logo-ferring.png');
                            $(this).addClass('footer-logo');
                        })
                        .fadeIn(200);

                }
            }
            else {
                if ($('img.footer-logo-menu').attr('src') != 'assets/img/logo-rekovelle-footer.png') {
                    $('img.footer-logo-menu').fadeOut(200, function () {
                            $(this).attr('src', 'assets/img/logo-rekovelle-footer.png');
                            $(this).removeClass('footer-logo');
                        })
                        .fadeIn(200);
                }
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

        Reveal.addEventListener('fragmentshown', function (event) {
            // event.fragment = the fragment DOM element

            console.log('fragmentshown: ' + event.indexh);
        });
        Reveal.addEventListener('fragmenthidden', function (event) {
            // event.fragment = the fragment DOM element

            console.log('fragmenthidden: ' + event.indexh);
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

})(jQuery, window, document);
