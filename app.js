const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector ('.navbar__menu')
const navLogo = document.querySelector ('#navbar__logo')


//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const experienceMenu = document.querySelector('#experience-page')
    let scrollPos = window.scrollY

    //add highlight class to the menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add ('highlight')
        homeMenu.classList.remove ('highlight')
        servicesMenu.classList.remove ('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.remove ('highlight')
        servicesMenu.classList.add ('highlight')
        return
    }

    if ((element && window.innerWidth < 960 && scrollPos > 600) || element) {
        element.classList.remove ('highlight')
    } 
}
