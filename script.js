function showNav(id) {
	const element = document.getElementById(id);
	element.classList.toggle("hidden");
}
showNav();

function toggleMobileNav() {
	const barIcon = document.getElementById("mobile-toggle-open");
	const xIcon = document.getElementById("mobile-toggle-close");
	barIcon.classList.toggle("hidden");
	xIcon.classList.toggle("hidden");
}
toggleMobileNav();
