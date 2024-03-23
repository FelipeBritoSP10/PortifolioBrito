                    //Menu hamburguer
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
