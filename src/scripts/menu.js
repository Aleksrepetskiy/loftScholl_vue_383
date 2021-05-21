const burger = document.querySelector('.burger');
const popupMenu = document.querySelector('.popup-menu');
const close = document.querySelector('.close');
const body = document.querySelector('body');

burger.addEventListener('click', function(){
	popupMenu.classList.add('active');
	body.classList.add('hidden');
})
close.addEventListener('click', function(){
	popupMenu.classList.remove('active');
	body.classList.remove('hidden');
})