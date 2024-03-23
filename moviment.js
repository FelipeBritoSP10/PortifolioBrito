                    //Menu de Hamburguer
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
});

//Biblioteca ScrollReveal
 document.addEventListener("DOMContentLoaded", function() {
            ScrollReveal().reveal('.sr', {
                delay: 200,    
                duration: 2000, 
                origin: 'bottom', 
                distance: '20px',
                easing: 'ease-in-out',
                interval: 100 
            });
        });
