//Banner 
$(document).ready(function(){
    $('.banner-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300, 
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true, 
        autoplaySpeed: 3000,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow') 
    });
});

//Calendário     

        const time = () => {

const activerow = document.querySelector('#activerow');

const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');
const saturday = document.querySelector('.saturday');
const sunday = document.querySelector('.sunday');

switch (new Date().getDay()) {

    case 1:
        monday.setAttribute("id", "activerow");
        break;
    case 2:
        tuesday.setAttribute("id", "activerow");
        break;
    case 3:
        wednesday.setAttribute("id", "activerow");
        break;
    case 4:
        thursday.setAttribute("id", "activerow");
        break;
    case 5:
        friday.setAttribute("id", "activerow");
        break;
    case 6:
        saturday.setAttribute("id", "activerow");
        break;
    case 0:
        sunday.setAttribute("id", "activerow");
        break;
}

}
time();

// Menu Hamburguer

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o menu
    document.getElementById('mobile-menu').classList.remove('open');
    document.querySelectorAll('.submenu').forEach(function(submenu) {
        submenu.classList.remove('open');
    });

    // Abrir menu
    document.getElementById('menu-icon').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.add('open');
    });

    // Fechar menu
    document.getElementById('close-icon').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.remove('open');
    });

    // Controle de submenu
    document.querySelectorAll('.submenu-parent').forEach(function(parent) {
        const submenu = parent.querySelector('.submenu');

        // Abrir submenu ao passar o mouse
        parent.addEventListener('mouseenter', function() {
            submenu.classList.add('open');
        });

        // Fechar submenu ao sair com o mouse
        parent.addEventListener('mouseleave', function() {
            submenu.classList.remove('open');
        });
    });
});