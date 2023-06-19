/*const arrows = document.querySelectorAll("[data-carousel-button]")

arrows.forEach(n => n.
    addEventListener("click", () => {
        const offset = 
    }))
    const carouselSlide= document.querySelector(".review");
    const carouselContainer= document.querySelectorAll(".review-div");

    const prevBtn = document.querySelector("previous-tag-link");
    const nextBtn = document.querySelector("next-tag-link");

let counter=1;
const size = carouselContainer[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselContainer.length -1) return;
    carouselSlide.style.transition ="transition 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
})


prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition ="transition 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
})
carouselSlide.addEventListener('transitioned', ()=>{
   
    if(carouselContainer[counter].id === 'lastClone'){
        carouselSlide.style.transition ="none";
        counter= carouselContainer.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
carouselSlide.addEventListener('transitioned', ()=>{
    if(carouselContainer[counter].id === 'firstClone'){
        carouselSlide.style.transition ="none";
        counter= carouselContainer.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
*/

const hamburger= document.querySelector(".hamburger");
const navItem= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navItem.classList.remove("active");

}))



