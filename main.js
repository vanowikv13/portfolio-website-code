//hide navbar at the begining
$(".navbar").hide();

//show and hide navbar button in right moment
function navBtn() {
    if(document.documentElement.clientWidth <= 560)
        $('#btnNav').show();
    else
        $('#btnNav').hide();
}

$(document).ready(function (){
    navBtn();
    $(window).resize(function() {
        navBtn();
    })
});

//variable checking status for the navbar function
var begining = false;

//point of status where to hide element
var point = 222;



//show navbar when it's on the bootom and under image
$(document).ready(function () {
    //hide scroll bar on top
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < point)
            $('.navbar').hide(1000);
        else {
            if (currentScrollPos >= point) {
                if (begining == false) {
                    $('.navbar').delay(1200).show(1000);
                    begining = true;
                } else
                    $('.navbar').show(1000);
            }
        }
    }
});

//smoothy scrolling
$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
    });
});


function cvAction(name = 'polish.pdf', download = true) {
    var link = document.createElement('a');
    if(download) {
        link.href = 'pdf/';
        link.download = name;
    } else {
        link.href = 'pdf/' + name;
        link.target = '_blank'
    }
    link.dispatchEvent(new MouseEvent('click'));
}