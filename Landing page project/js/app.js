/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/** 
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('#navbar-list');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
for (let element of sections) {
     let navList = document.createElement('li');
     navList.innerHTML = `<a href="#${element.id}" class="menu-link" data-link="${element.id}">
     ${element.dataset.nav}</a>`
     
    fragment.appendChild(navList);
}
navMenu.appendChild(fragment);

// scroll to Section using scrollIntoView
navMenu.addEventListener('click', function scrollToSection (event){
    event.preventDefault();
    const targetLink = document.getElementById(event.target.dataset.link);
    targetLink.scrollIntoView({behavior: 'smooth'});   
})
// Responsive Navigation Bar
const menuBar = document.querySelector('.menubar');
menuBar.addEventListener('click', function() {
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
    else {
        navMenu.classList.add('open');
    }
})
navMenu.addEventListener('click', function() {
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
})

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function() {
    for (let section of sections) {
        const position = section.getBoundingClientRect();
        if (position.top <= 375 && position.top >= -200) {
            section.classList.add('active');
        }
        else {
            section.classList.remove('active');
        }
       
    }
})

// Scroll to the Top Button
const topBtn = document.querySelector('.scroll-btn');
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 500) {
        topBtn.classList.add('show');
    }
    else {
        topBtn.classList.remove('show');
    }
})
topBtn.addEventListener('click', function(){
    window.scrollTo({top : 0, behavior : 'smooth'
    })
})
// display the current year to the copyright
const year = document.querySelector('#year');
year.innerHTML = new Date().getFullYear();