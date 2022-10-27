// Select all slides
const slides = document.querySelectorAll(".slide");
// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let curSlide = 0;

const thinkSlide = document.querySelector(".think");
thinkSlide.addEventListener("click", function () {
    curSlide = 0;
    moveSlide();
});

const loveSlide = document.getElementsByClassName("love");
loveSlide[0].addEventListener("click", function () {
    curSlide = 1;
    moveSlide();
});

const doSlide = document.getElementsByClassName("do")[0].addEventListener("click", gotoDo);
export function gotoDo() {
    curSlide = 2;
    moveSlide();
}

function moveSlide() {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}