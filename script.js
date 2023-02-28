const body = document.body;
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')

let activeslide = 0;

rightbtn.addEventListener('click' ,() => {
    activeslide++;

    if(activeslide > slides.length - 1){
        activeslide = 0
    }

    setBgtoBody()
    setActiveSlide()
})

leftbtn.addEventListener('click', () => {
    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    setBgtoBody()
    setActiveSlide()
})


setBgtoBody()

function setBgtoBody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeslide].classList.add('active')
}