// VARIABLES

// NAV ELEMENTS
const navBar = document.getElementById("nav");
const header = document.getElementById("header");
// DARK-LIGHT MODE ELEMENTS
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
// ABOUT ME SECTION ELEMENTS
const aboutMeSection = document.getElementById("about-me-section");
const aboutMeTitle = document.getElementById("about-me-title");
const aboutMeInfo = document.getElementById("about-me-info");




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



function chnageDarkMode () {
    // displays and hides elements
    moon.style.display = "none"; 
    sun.style.display = "block";
    //changes backgroundcolor and font color about me section
    aboutMeSection.style.backgroundColor = "#0D1117"; 
    aboutMeSection.style.color = "rgb(197 197 197)";
    aboutMeTitle.style.color = "rgb(197 197 197)";
    aboutMeInfo.style.color = "rgb(197 197 197)";
}

moon.addEventListener("click", chnageDarkMode);