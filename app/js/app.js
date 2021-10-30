// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	
	var button = document.querySelector("#header_menuBtn");
	var MenuDrawer = document.querySelector("#MenuDrawer_main");
	
	button.addEventListener("click", () => {
		button.classList.toggle("is-active");
		MenuDrawer.classList.toggle("MenuDrawer_open");

	});

	   
	   

});
