var slideIndex = 1;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

showslide(slideIndex);

function controlslide(n){
    slideIndex += n;
    showslide(slideIndex);
}


function showslide(n){
    let i ;
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    for(i=0;i<dots.length;i++){
       dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    
    dots[slideIndex-1].className += " active";
    
    
}


function dotSlide(n){
    showslide(slideIndex = n);
}