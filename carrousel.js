var slideIndex = 1;

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2) }, 2500);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1) }, 2500);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Diapositive");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() { plusSlides(1) }, 2500);
})

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(n + 1) }, 2500);
    showSlides(slideIndex = n);
}