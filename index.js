let slideIndex = 1;
showSlide(slideIndex)

function nextSlide(){
    showSlide(slideIndex +=1)
}
function previousSlide(){
    showSlide(slideIndex -=1)
}
function currentSlide(n){
    showSlide(slideIndex = n)
}
function showSlide(n){
    const slides = document.querySelectorAll('.portfolio__carousel')
    const dots = document.querySelectorAll('.dot')
    if (n>slides.length){
        slideIndex =1
    }
    if(n<1){
        slideIndex =slides.length
    }
    for (let slide of slides){
        slide.style.display = 'none'
    }
    for (let i=0; i < dots.length ;i++){
        dots[i].className = dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = 'flex'
    dots[slideIndex-1].className+= " active"
}

