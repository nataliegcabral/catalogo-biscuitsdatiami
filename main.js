const burguer = document.querySelector('#burguer')

function changedSize() {
    if (window.innerWidth >= 768) {
        item.style.display = 'block'
        burguer.style.display = 'none'
    } else {
        item.style.display = 'none'
        burguer.style.display = 'block'
    }
}

burguer.addEventListener('click', () => {
    
    if (item.style.display == 'block') {
        item.style.display = 'none'
    } else {
        item.style.display = 'block'
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slide')
    let ponto = document.querySelectorAll('.ponto');

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < ponto.length; i++) {
        ponto[i].className = ponto[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    ponto[slideIndex-1].className += " active";
}

