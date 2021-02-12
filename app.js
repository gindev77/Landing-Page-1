const menu = document.querySelector('.list-nav');
// const item_list = document.querySelector('.item-nav');
const btnMenu = document.querySelector('.btn-toggle-container');


btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
    // item_list.classList.toggle('active-menu');
})

