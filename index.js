// VARIABLES

const navBar = document.getElementById("nav");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.style.top = "0";
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#131313"
        navBar.style.borderBottom= "1px solid white"
        navBar.style.zIndex = "2"
    } else {
        navBar.style.top = "0";
        navBar.style.position = "absolute";
        navBar.style.backgroundColor = "#13131300"
        navBar.style.borderBottom= ""
    }
}

window.onscroll = function() {scrollFunction()};


