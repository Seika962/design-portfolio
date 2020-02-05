jQuery(function($){
    var doAnimations = function(){
        var $offset = $(window).scrollTop() + 800;
        var $beforeAnimates = $('.beforeAnimate');

        $beforeAnimates.each(function(i){
            var $beforeAnimate = $(this);
                if ($beforeAnimate.offset().top + 350 < $offset){
                    $beforeAnimate.removeClass('beforeAnimate').addClass('animating');
                }
        });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});

function myOpening(){
    document.getElementById("sidebarMenu").style.transform = "translateX(0)";
    document.getElementById("sidebarMenu").style.transitionDuration = "1s";
    document.getElementById("sidebarMenu").style.transitionTimingFunction = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
    document.getElementById("newsWrapper").style.marginLeft = "200px";
    document.getElementById("newsWrapper").style.transitionDuration = "1s";
    document.getElementById("newsWrapper").style.transitionTimingFunction = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";

}
function myClosing(){
    document.getElementById("sidebarMenu").style.transform = "translateX(-200px)";
    document.getElementById("sidebarMenu").style.transitionDuration = "1s";
    document.getElementById("newsWrapper").style.marginLeft = "0";
    document.getElementById("newsWrapper").style.transitionDuration = "1s";
}
var hbgNav = document.getElementById('hbgNav');
function myNavigation(){
    hbgNav.style.transform= "translateX(0)";
    hbgNav.style.transitionDuration="1.5s";
}
function myNavClosing(){
    hbgNav.style.transform="translateX(190px)";
    hbgNav.style.transitionDuration = "1.5s";
}