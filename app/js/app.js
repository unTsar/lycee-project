// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	var button = document.querySelector("#header_menuBtn");
	button.addEventListener("click", () => {
		button.classList.toggle("is-active");
	});

});
