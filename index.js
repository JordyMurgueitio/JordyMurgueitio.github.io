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
const jordyImage = document.getElementById("jordy-image");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
// SKILLS SECTION ELEMENTS
const skillsSection = document.getElementById("tools-section");
const toolsTitle = document.getElementById("tools-title");
const skillsInfos = document.getElementsByClassName("service-box");
// PORTFOLIO SECTION ELEMENTS
const portfolioSection = document.getElementById("portfolio-section");
const portfolioTitle = document.getElementById("portfolio-title");
const projectBox = document.getElementsByClassName("project-box");
const projectTitle = document.getElementsByClassName("project-title");
// CONTACT SECTION ELEMENTS
const contactSection = document.getElementById("contact-section");
const contactTitle = document.getElementById("contact-title");
const contactForm = document.getElementById("form");




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
    github.style.color = "#ffffff";
    linkedin.style.color = "#ffffff";
    //changes backgroundcolor and font color skills section
    skillsSection.style.backgroundColor = "#0D1117";
    toolsTitle.style.color = "rgb(197 197 197)";
    for (let i = 0; i < skillsInfos.length; i++) {
        skillsInfos[i].style.color = "rgb(197 197 197)";
    }
    //changes backgroundcolor and font color portfolio section
    portfolioSection.style.backgroundColor = "#0D1117";
    portfolioTitle.style.color = "rgb(197 197 197)";
    for (let i = 0; i < projectBox.length; i++) {
        projectBox[i].style.backgroundColor = "#0D1117";
        projectBox[i].style.boxShadow = "2px 2px 5px #000000";
        projectTitle[i].style.color = "rgb(197 197 197)";
    }
    //changes backgroundcolor and font color contact section
    contactSection.style.backgroundColor = "#0D1117";
    contactTitle.style.color = "rgb(197 197 197)";
}

moon.addEventListener("click", chnageDarkMode);

function chnageLightMode () {
    // displays and hides elements
    moon.style.display = "block"; 
    sun.style.display = "none";
    //changes backgroundcolor and font color about me section
    aboutMeSection.style.backgroundColor = "rgb(243, 234, 234)"; 
    aboutMeSection.style.color = "rgb(0, 0, 0)";
    aboutMeTitle.style.color = "rgb(0, 0, 0)";
    aboutMeInfo.style.color = "rgb(0, 0, 0)";
    github.style.color = "#131313";
    linkedin.style.color = "#131313";
    //changes backgroundcolor and font color skills section
    skillsSection.style.backgroundColor = "rgb(243, 234, 234)";
    toolsTitle.style.color = "rgb(0, 0, 0)";
    for (let i = 0; i < skillsInfos.length; i++) {
        skillsInfos[i].style.color = "rgb(0, 0, 0)";
    }
    //changes backgroundcolor and font color portfolio section
    portfolioSection.style.backgroundColor = "rgb(243, 234, 234)";
    portfolioTitle.style.color = "rgb(0, 0, 0)";
    for (let i = 0; i < projectBox.length; i++) {
        projectBox[i].style.backgroundColor = "rgb(243, 234, 234)";
        projectBox[i].style.boxShadow = "2px 2px 5px #b4bbbb";
        projectTitle[i].style.color = "rgb(0, 0, 0)";
    }
    //changes backgroundcolor and font color contact section
    contactSection.style.backgroundColor = "rgb(243, 234, 234)";
    contactTitle.style.color = "rgb(0, 0, 0)";
}

sun.addEventListener("click", chnageLightMode);