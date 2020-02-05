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