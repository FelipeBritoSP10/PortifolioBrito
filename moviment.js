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


  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    showSlide(currentSlide);

    document.querySelector(".carousel-prev").addEventListener("click", function() {
      prevSlide();
    });

    document.querySelector(".carousel-next").addEventListener("click", function() {
      nextSlide();
    });
  });
