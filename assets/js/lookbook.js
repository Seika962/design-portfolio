jQuery(function($){
    
    var doAnimations = function() {
    
        var $offset = $(window).scrollTop() + 800;
        var $beforeAnimates = $('.beforeAnimate');
        var $middleAnimates = $('.middleAnimate');
        var $lateAnimates = $('.lateAnimate');
        // if ($beforeAnimate.length == 0) {
        //     $(window).off('scroll', doAnimations);
        // }

        $beforeAnimates.each(function(i) {
            var $beforeAnimate = $(this);
                if ($beforeAnimate.offset().top + 150 < $offset) {
                    $beforeAnimate.removeClass('beforeAnimate').addClass('animating');
                }
        });

        $middleAnimates.each(function(i) {
            var $middleAnimate = $(this);
                if ($middleAnimate.offset().top - 400 < $offset) {
                    $middleAnimate.removeClass('middleAnimate').addClass('animating');
                }
        });

        $lateAnimates.each(function(i){
            var $lateAnimate = $(this);
                if ($lateAnimate.offset().top + $lateAnimate.height() < $offset) {
                    $lateAnimate.removeClass('lateAnimate').addClass('animating');

                }
        });


        // function myTitle(){
        //     var title = 

        // }
    };

    // myTitle();
    $(window).on('scroll',doAnimations);
    $(window).trigger('scroll');
});

var hbgNav = document.getElementById('hbgNav');
function myNavigation(){
    hbgNav.style.transform= "translateX(0)";
    hbgNav.style.transitionDuration="1.5s";
}
function myClosing(){
    hbgNav.style.transform="translateX(190px)";
    hbgNav.style.transitionDuration = "1.5s";
}