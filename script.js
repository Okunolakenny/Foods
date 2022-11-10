let preloader = document.querySelector(".preloader");
var bar = document.querySelector('.bar');

var time = document.querySelector('.time');
var links = document.querySelector('.links');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
bar.onclick = function(){
    links.style.transform="scale(1)";
    bar.style.transform = "scale(0)";
    time.style.transform = "scale(1)";
    // body.classList.add('overflow');
    
    
}
time.onclick = function(){
    links.style.transform="scale(0)";
    bar.style.transform = "scale(1)";
    time.style.transform = "scale(0)";
    // body.style.overflow = ('auto');
    // body.classList.remove('overflow');

    
}
// window.onscroll = function(){
    
// if (window.Height <100) {
//     nav.style.background ="none";
    
// } else {
//     nav.style.background = "black";
//     nav.style.opacity ="90%";
// }
// }
window.addEventListener('scroll', () => {


})

AOS.init({
    offset:200,
    duration:500

});  


window.addEventListener("load", function () {
    preloader.style.display = "none";
});

window.addEventListener("loadstart", function () {
    preloader.style.display = "block";

});
setTimeout(() => {
    window.removeEventListener("loadstart")
}, 60000)

