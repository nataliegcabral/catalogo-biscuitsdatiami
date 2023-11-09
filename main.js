const burguer = document.querySelector('#burguer')

function changedSize() {
    if (window.innerWidth >= 768) {
        navbar.style.display = 'block'
        burguer.style.display = 'none'
    } else {
        navbar.style.display = 'none'
        burguer.style.display = 'block'
    }
}

function carregaMenu() {
    if (window.innerWidth >= 768) {
        burguer.style.display = 'none'
        navbar.style.display = 'block'        
    } else {
        navbar.style.display = 'none'
        burguer.style.display = 'block'
    }

}

burguer.addEventListener('click', () => {
    
    if (navbar.style.display == 'block') {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'block'
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slide');
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

