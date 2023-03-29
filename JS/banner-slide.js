let slideIndex = 0;
let slideInterval = setInterval(autoSlide, 4000);
function changeSlide(dir) {
    showSlide((slideIndex += dir));
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 4000);
}
function setSlide(num) {
    showSlide((slideIndex = num));
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 4000);
}
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
function showSlide(Index) {
    let slide = document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");
    if (slideIndex > slide.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slide.length - 1;
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity = 0;
        dot[i].style.background = "white";
    }
    slide[slideIndex].style.opacity = 1;
    dot[slideIndex].style.background = "grey";
}
