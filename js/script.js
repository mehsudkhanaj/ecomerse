let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active');
});
let shopingCart = document.querySelector('.shopping-cart');
document.querySelector('#shoping-btn').addEventListener('click', () => {
    shopingCart.classList.toggle('active');
});
