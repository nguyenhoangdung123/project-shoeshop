const slidesContainer = document.getElementById('slides');
const slides = document.getElementsByClassName('mysliders');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
console.log(slidesContainer);
let counter = 0;
function renderSlide() {
    for (let i = 0; i< slides.length; i++){
        if(i === counter){
            slides[i].style.display = 'block';
        }
        else {
            slides[i].style.display = 'none';
        }
    }
}
function setSlide(newSlideIndex) {
    counter = newSlideIndex;
    renderSlide();
}
let timer = setInterval(nextslide, 5000);
function nextslide() {
    let newSlideIndex = counter;
    if(counter === slides.length - 1){
        newSlideIndex = 0;
    }
    else {
        newSlideIndex += 1;
    }
    setSlide (newSlideIndex);
}
function prevslide() {
    let newSlideIndex = counter;
    if(counter != 0 ) {
        newSlideIndex -= 1;
    }
    else{
        newSlideIndex = slides.length - 1;
    }
    setSlide (newSlideIndex);
}
renderSlide();
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextslide, 5000);
}
nextBtn.addEventListener('click', ()=> {    
    nextslide();
    resetTimer();
})
prevBtn.addEventListener('click' ,()=> {
    prevslide();
    resetTimer();
})
