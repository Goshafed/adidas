function MenuOpen(){
    let hamburger = document.querySelector("#hamburger");
    let navElements = document.querySelector("#navElements");
    hamburger.onclick = function(){
        hamburger.classList.toggle("hamburger_active");
        navElements.classList.toggle("nav__elements_active")
    }
}
MenuOpen();
new Swiper(".swiper",{
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    speed:1500,
    effect:"cube",
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        dynamicBullets:true,
    }
})