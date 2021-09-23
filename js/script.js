//JS for responsive navigation:
function openNavigation() {
    var x = document.querySelector("#myTopnav");
    x.classList.toggle('active-height');
    let listNav = document.querySelectorAll("#myTopnav li:not(:first-child)");
    for( var item of listNav){
        item.classList.toggle('active-visibility');
    }
}


//JS for slideShow index page:
var slideIndex = 0;
showSlides();
function showSlides() {
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); 
}