
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});


var filterbtn = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterbtn.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


let search = document.querySelector('.search-box');

document.querySelector('.fa-search').onclick = () =>{
  search.classList.toggle('active');
}



const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPop = document.querySelector('.fa-user');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPop.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});