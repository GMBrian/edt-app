(function (a) {
    a.createModal = function (b) {
        defaults = {title: "", message: "Your Message Goes Here!", closeButton: true, scrollable: false};
        var b = a.extend({}, defaults, b);
        var c = (b.scrollable === true) ? 'style="max-height: 420px;overflow-y: auto;"' : "";
        html = '<div class="modal fade" id="myModal">';
        html += '<div class="modal-dialog">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
        if (b.title.length > 0) {
            html += '<h4 class="modal-title">' + b.title + "</h4>"
        }
        html += "</div>";
        html += '<div class="modal-body" ' + c + ">";
        html += b.message;
        html += "</div>";
        html += '<div class="modal-footer">';
        if (b.closeButton === true) {
            html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Sluit</button>'
        }
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        a("body").prepend(html);
        a("#myModal").modal().on("hidden.bs.modal", function () {
            a(this).remove()
        })
    }
})(jQuery);

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
            progress: false,
            keyboard: {
                27: null, // do something custom when ESC is pressed
                32: function () {
                    Reveal.toggleOverview();
                } // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
            }
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

        Reveal.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv

            $('.tooltip-container').each(function () {
                $(this).fadeOut();
            });
        });


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

        targetTooltip.css({
            top: offset.top - 8,
            right: ($(window).width() - offset.left - $(this).width() - 8),
            position: 'absolute'
        });
        targetTooltip.show();

        return false;
    });

    $('.tooltip-close').click(function () {
        $(this).closest('.tooltip-container').hide();
        return false;
    });


    $('.goSmpc').click(function () {
        var pdf_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="' + pdf_link + '"></iframe></div>'
        $.createModal({
            title: 'SmPC',
            message: iframe,
            closeButton: true,
            scrollable: false
        });

        $('.iframe-container').height($(window).height() - 230);
        $('.iframe-container iframe').height($(window).height() - 230);

        return false;
    });


    $('.goHome').click(function () {
        Reveal.slide(0, 0);
    });


    var inFullScreen = false; // flag to show when full screen

    var fsClass = document.getElementsByClassName("goFullScreen");
    for (var i = 0; i < fsClass.length; i++) {
        fsClass[i].addEventListener("click", function (evt) {
            if (inFullScreen == false) {
                makeFullScreen(document.body); // open to full screen
            } else {
                reset();
            }
        }, false);
    }


    function makeFullScreen(divObj) {
        if (divObj.requestFullscreen) {
            divObj.requestFullscreen();
        }
        else if (divObj.msRequestFullscreen) {
            divObj.msRequestFullscreen();
        }
        else if (divObj.mozRequestFullScreen) {
            divObj.mozRequestFullScreen();
        }
        else if (divObj.webkitRequestFullscreen) {
            divObj.webkitRequestFullscreen();
        }
        inFullScreen = true;

        setTimeout(function () {
            Reveal.sync();
        }, 1500);

        return;
    }

    function reset() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        inFullScreen = false;

        setTimeout(function () {
            Reveal.sync();
        }, 1500);

        return;
    }


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
