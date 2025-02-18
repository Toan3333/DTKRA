export function showMenu() {
	document.addEventListener("DOMContentLoaded", function () {
		const barBtn = document.querySelector(".header-bar");
		const menu = document.querySelector(".header-nav-mobile");
		const overlay = document.querySelector(".overlay");

		$(".tabs").tabslet({
			active: 2,
			animation: true,
		});

		if (barBtn && menu && overlay) {
			barBtn.addEventListener("click", () => {
				menu.classList.toggle("open");
				overlay.classList.toggle("is-show");

				const icon = barBtn.querySelector("i");
				if (menu.classList.contains("open")) {
					icon.classList.remove("fa-bars");
					icon.classList.add("fa-times");
				} else {
					icon.classList.remove("fa-times");
					icon.classList.add("fa-bars");
				}
			});
		}

		// Search
		const searchBtn = document.querySelector(".header-search");
		const searchBar = document.querySelector(".search-bar-container");

		searchBtn.addEventListener("click", function () {
			searchBar.classList.toggle("active");
		});
	});
}

showMenu();
