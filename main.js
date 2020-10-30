'use strict';

// Navbar 올라가면 투명, 내려가면 핑크
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
  console.log(window.scrollY);
  console.log(`navbarHeight : ${navbarHeight}`);

  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
})

// Navbar menu 누르면 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);

    // 이렇게도 사용가능
    // console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior:"smooth"});
})

// Home Contact me scrolling

// 이렇게도 사용가능
// const homeContactBtn = document.querySelector(".home__contact");
// homeContactBtn.addEventListener('click',()=>{
//     const scrollTo = document.querySelector("#contact");
//     scrollTo.scrollIntoView({behavior:"smooth"});
// })


// Navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
});


const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

// Home 내려가면 불투명
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// Arrow up button
const arrow = document.querySelector(".arrow-up");

document.addEventListener('scroll', ()=>{   
    if(window.scrollY > homeHeight/2){
        arrow.classList.add('visible');
    }else{
        arrow.classList.remove('visible');
    }
});

arrow.addEventListener('click', ()=>{
    scrollIntoView('#home');
});

//My work filtering
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

// Remove selection from the previous item and select the new one
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');


//My work button annimation
  projectContainer.classList.add('annim-out');
  setTimeout(()=>{
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
          project.classList.remove('invisible');
        } else {
          project.classList.add('invisible');
        }
      });
    projectContainer.classList.remove('annim-out');
  }, 200); 
});