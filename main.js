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

//show navbar when it's on the bootom and under image
$(document).ready(function(){
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos);
        if(currentScrollPos < 720.0)
            $('.navbar').hide().removeClass('.navbar');
        else{
            if(window.pageYOffset > 720)
                $('.navbar').delay(1200).show(1000).addClass('.navbar');
        }
    }
});

