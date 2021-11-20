var dots = document.querySelectorAll('.dot');
var navBtns = document.querySelectorAll('.navBtn');
var slides = document.querySelectorAll(".mySlides");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
navBtns.forEach((nav) => {
    if(nav.classList.contains('prev')) {
        nav.addEventListener('click', e => plusSlides(e, -1))
    } else {
        nav.addEventListener('click', e => plusSlides(e, 1))
    }
})

function plusSlides(e, n) {
    e.preventDefault();
    showSlides(slideIndex += n);
}

// Thumbnail image controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', e => currentSlide(e, index+1))
})

function currentSlide(e ,n) {
    e.preventDefault()
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) {
        slides[i].className = 'mySlides fade none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].className = 'mySlides fade block'
    dots[slideIndex-1].className += " active";
  }