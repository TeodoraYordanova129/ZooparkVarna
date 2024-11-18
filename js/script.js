let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => 
{
    menu.classList.toggle('ri');
    navlist.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '32px',
        duration: 1200,
        reset: true
    });

    sr.reveal('.main-content h1', {delay: 300, origin: 'left'});
    sr.reveal('.main-content p', {delay: 400, origin: 'bottom'});
    sr.reveal('.button', {delay: 500, origin: 'right'});
});

window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};




document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.animal-slider');
    
    
    function moveSlide(slider, direction) {
        const slides = slider.querySelectorAll('.animal-slide');
        const slideWidth = slides[0].offsetWidth + 15; 
        
        if (direction === 'next') {
       
            slider.style.transform = `translateX(-${slideWidth}px)`;
         
            slider.addEventListener('transitionend', function() {
                const firstSlide = slides[0];
                slider.appendChild(firstSlide);
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
            
                setTimeout(() => {
                    slider.style.transition = 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
                }, 50);
            }, { once: true });
        } else {

            slider.style.transform = `translateX(${slideWidth}px)`;
         
            slider.addEventListener('transitionend', function() {
                const lastSlide = slides[slides.length - 1];
                slider.insertBefore(lastSlide, slides[0]);
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
      
                setTimeout(() => {
                    slider.style.transition = 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
                }, 50);
            }, { once: true });
        }
    }


    const leftButtons = document.querySelectorAll('.slider-btn.left');
    const rightButtons = document.querySelectorAll('.slider-btn.right');

    leftButtons.forEach(button => {
        button.addEventListener('click', function() {
            const slider = this.closest('.animal-slider-container').querySelector('.animal-slider');
            moveSlide(slider, 'prev');
        });
    });

    rightButtons.forEach(button => {
        button.addEventListener('click', function() {
            const slider = this.closest('.animal-slider-container').querySelector('.animal-slider');
            moveSlide(slider, 'next');
        });
    });

    setInterval(() => {
        sliders.forEach(slider => {
            moveSlide(slider, 'next');
        });
    }, 5000); 
});

  