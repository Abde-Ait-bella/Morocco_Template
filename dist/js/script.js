var carousel = document.querySelector('.carousel');
let arrowbtn = document.querySelectorAll('.flech');
let firstCardWidth = document.querySelector(".card").offsetWidth;

var isDragging = false, startX, startScrollLeft;

arrowbtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
})

const dragStart =(e)=>{
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragStop = ()=>{
    isDragging = false;
    carousel.classList.remove('dragging');
}

const moveCard = (e)=>{
    if (!isDragging)return;
    console.log(e.pageX);
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)

}

carousel.addEventListener('mousemove', moveCard);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);