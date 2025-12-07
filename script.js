// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Class active untuk shopping card //
const shoppingCard = document.querySelector('.shopping-card'); 
document.querySelector('#shopping-card-button').onclick = (e) => {
    shoppingCard.classList.toggle('active');
    e.preventDefault
};

//klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-card-botton');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
document.addEventListener('click', function(e) {
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    })
document.addEventListener('click', function(e) {    
    if(!sc.contains(e.target) && !shoppingCard.contains(e.target)){
        shoppingCard.classList.remove('active');
    }
})