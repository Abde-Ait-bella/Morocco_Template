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