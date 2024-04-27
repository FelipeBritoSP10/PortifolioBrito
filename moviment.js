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

  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        });
