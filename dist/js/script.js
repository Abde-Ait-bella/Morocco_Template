// var card = document.querySelector('.activite-1');

// var isDragging = false;

// const dragStart =()=>{
//     isDragging = true;
// }

// const moveCard = (e)=>{
//     console.log(e.pageX);
//     if (!isDragging)return;
//     card.scrollLeft = e.pageX;
// }

// card.addEventListener('mousemove', moveCard)
// card.addEventListener('mousedown', dragStart)
$(".slider__ville").on("click", function() {
    $(".backgrounds img").removeClass("visible");
    $(".backgrounds img").eq($(this).index()).addClass("visible");
  })
const navberger = document.getElementsByClassName("navberger");
const menumobil = document.getElementsByClassName("menumobil");

navberger[0].addEventListener("click", function (){
    this.classList.toggle("open");
    menumobil[0].classList.toggle("open");

}
)
menumobil[0].addEventListener("click", function (){
    this.classList.remove("open");
    navberger[0].classList.remove("open");
})

var nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        nav.classList.add('background');
    } else {
        nav.classList.remove('background');
    }
});