// var imgContainer = document.querySelectorAll('img-con');

// imgContainer.each.on('hover', function(){

// });

// var img = document.getElementsByTagName('img');
// var filter = document.getElementsByClassName('filter');

// var i;
// for (i = 0; i < img.length; i++) {
//     img[i].addEventListener('mouseover',function(){
//         var filter = this.nextElementSibling;
//         this.style.position = "relative";
//         // this.style.background = "red";
//         filter.style.position = "absolute";
//         filter.style.top = "0";
//         filter.style.height = "200px";
//         filter.style.transitionDuration = ".8s";
//         filter.style.opacity = "1";
//     });
// }
function myOpening(){
    document.getElementById("sidebarMenu").style.transform = "translateX(0)";
    document.getElementById("sidebarMenu").style.transitionDuration = "1s";
    document.getElementById("sidebarMenu").style.transitionTimingFunction = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
    document.getElementById("productsWrapper").style.marginLeft = "15%";
    document.getElementById("productsWrapper").style.transitionDuration = "1s";
    document.getElementById("productsWrapper").style.transitionTimingFunction = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
}
function myClosing(){
    document.getElementById("sidebarMenu").style.transform = "translateX(-100%)";
    document.getElementById("sidebarMenu").style.transitionDuration = "1s";
    document.getElementById("productsWrapper").style.marginLeft = "0";
    document.getElementById("productsWrapper").style.transitionDuration = "1s";
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