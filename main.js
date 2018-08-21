//download pdf
function clickDow(name = 'cv.pdf') {
    var link = document.createElement('a');
    link.href = 'pdf/';
    link.download = name;
    link.dispatchEvent(new MouseEvent('click'));
}

//open pdf in new tab
function clickView(name = 'cv.pdf') {
    var link = document.createElement('a');
    link.href = 'pdf/' + name;
    link.target = '_blank'
    link.dispatchEvent(new MouseEvent('click'));
}

//hide navbar at the begining
$(".navbar").hide();

//variable checking status for the navbar function
var begining = false;

//point of status where to hide element
var point = 222;

//show navbar when it's on the bootom and under image
$(document).ready(function () {
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        ///console.log(currentScrollPos);
        ///console.log(begining);
        if (currentScrollPos < point)
            $('.navbar').hide(1000);
        else {
            if (window.pageYOffset >= point) {
                if (begining == false) {
                    $('.navbar').delay(1200).show(1000);
                    begining = true;
                } else
                    $('.navbar').show(1000);
            }
        }
    }
});