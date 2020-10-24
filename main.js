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

