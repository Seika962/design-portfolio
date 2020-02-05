
jQuery(function($){
    var doAnimations = function(){
        var $offset = $(window).scrollTop() + 800;
        var $aWrappers = $('.animateWrapper');

        $aWrappers.each(function(i){
            var $aWrapper = $(this);
            var $animatable = $aWrapper.find('.beforeAnimate');
            if (($aWrapper.offset().top + $aWrapper.height() - 20) < $offset){
                $animatable.removeClass('beforeAnimate').addClass('animating');
            }
        });
    }
    $(window).on('scroll',doAnimations);
    $(window).trigger('scroll');
    
});

var slideNumber = 0;
myShowSlides(slideNumber);

function myShowSlides(slideNumber){
    var i, slides, bars, sLength, bLength;

    slides = document.getElementsByClassName('atfImage');
    bars = document.getElementsByClassName('bar');
    sLength = slides.length;
    bLength = bars.length;

    for(i=0; i < sLength; i++){
        slides[i].style.display = "none";
        // slides[i].style.transitionDuration = "1s";
    }
    for(i=0; i < bLength; i++){
        bars[i].className = bars[i].className.replace(" active","");
    }

    slides[slideNumber].style.display = "block";
    slides[slideNumber].style.transitionDuration = "1s";
    // 表示する
    bars[slideNumber].className += " active";
}

var hbgNav = document.getElementById('hbgNav');
function myNavigation(){
    hbgNav.style.transform= "translateX(0)";
    hbgNav.style.transitionDuration="1.5s";
}
function myClosing(){
    hbgNav.style.transform="translateX(190px)";
    hbgNav.style.transitionDuration = "1.5s";
}