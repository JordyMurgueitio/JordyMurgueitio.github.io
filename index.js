// VARIABLES

const navBar = document.getElementById("nav");
const header = document.getElementById("header");

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navBar.style.top = "0";
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#131313"
        navBar.style.borderBottom= "1px solid white"
        navBar.style.zIndex = "2"
        header.style.marginTop = "60px";
    } else {
        navBar.style.top = "0";
        navBar.style.position = "absolute";
        navBar.style.backgroundColor = "#13131300"
        navBar.style.borderBottom= "";
        header.style.marginTop = "0px";
    }
}

window.onscroll = function() {scrollFunction()};


