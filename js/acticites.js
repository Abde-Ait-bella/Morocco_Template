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