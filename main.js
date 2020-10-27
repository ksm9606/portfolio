'use strict';

// Navbar 올라가면 투명 내려가면 핑크
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log(`navbarHeight : ${navbarHeight}`);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark')
    }else{
        navbar.classList.remove('navbar--dark')
    }
})

// Navbar menu scrolling
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});
})
