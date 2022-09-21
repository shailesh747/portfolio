const navToggle = document.querySelector(".mobile-navigation-toggle");

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("mobile-navigation-open");
});
