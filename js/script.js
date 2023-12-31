let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    userAccount.classList.remove('active');
    navbar.classList.remove('active');

});
let shopingCart = document.querySelector('.shopping-cart');
document.querySelector('#shoping-btn').addEventListener('click', () => {
    shopingCart.classList.toggle('active');
    
    searchForm.classList.remove('active');
    userAccount.classList.remove('active');
    navbar.classList.remove('active');
});
let userAccount = document.querySelector('.login-form');
document.querySelector('#login-btn').addEventListener('click', () => {
    userAccount.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    navbar.classList.remove('active');
});
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').addEventListener('click', () => {
    navbar.classList.toggle('active');
    shopingCart.classList.remove('active');
    userAccount.classList.remove('active');
    
});

window.onscroll=()=>{
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    userAccount.classList.remove('active');
    navbar.classList.remove('active');
  
}


var swiper = new Swiper(".product-slider", {
    // slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  
var review = new Swiper(".review-slider", {
    // slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });