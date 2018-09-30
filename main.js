//hide navbar at the begining
$(".navbar").hide();

//show and hide navbar button on small width in right moment
function navBtn() {
    if ($( window ).width() <= 560)
        $('#btnNav').show();
    else
        $('#btnNav').hide();
}

$(document).ready(function () {
    navBtn();
    $(window).resize(function () {
        navBtn();
    })
});

//variable checking status for the navbar function
var begining = false;

//start point of Y offset when hide elements
var point = 222;

//last position of scroll
var lastScrollTop = 0;

//navbar scripts
$(document).ready(function () {
    //hide nav on top
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < point)
            $('.navbar').hide(1000);
        else {
            if (currentScrollPos >= point && $( window ).width() > 575) {
                if (begining == false) {
                    $('.navbar').delay(1200).show(1000);
                    begining = true;
                } else
                    $('.navbar').show(1000);
            }
        }

        //on small resoulution scrolling
        if ($( window ).width() <= 575) {
            if (currentScrollPos > lastScrollTop) {
                $('.navbar').hide();
            } else {
                $('.navbar').show();
            }
            lastScrollTop = currentScrollPos;
        }
    }
});

//smoothy scrolling
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

//download and view cv depends of arguments
function cvAction(name = 'polish.pdf', download = true) {
    var link = document.createElement('a');
    if (download) {
        link.href = 'pdf/';
        link.download = name;
    } else {
        link.href = 'pdf/' + name;
        link.target = '_blank'
    }
    link.dispatchEvent(new MouseEvent('click'));
}