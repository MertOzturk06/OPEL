var çerez=document.querySelector(".çerez")
var kapat=document.querySelector("#çerezbutonu")

window.onload=()=>{
    çerez.style.border="none"
    çerez.style.backgroundColor="white"
    çerez.style.color="white"
    çerez.style.width="610px"
    çerez.style.height="380px"
    çerez.style.padding="auto auto"
    çerez.style.margin="auto auto"
    çerez.style.color="black"
    çerez.style.textAlign="left"
    çerez.style.paddingLeft="30px"
    çerez.style.paddingRight="30px"
    çerez.style.paddingTop="30px"
    çerez.style.paddingBottom="30px"
    çerez.showModal()
}


kapat.addEventListener("click",()=>{
    çerez.close()
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
      0:{
        slidesPerView: 1,

      },
      520:{
        slidesPerView: 3,
      },
      700:{
        slidesPerView:4
      }
    }
  });