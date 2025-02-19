export function showMenu() {
	document.addEventListener("DOMContentLoaded", function () {
		const barBtn = document.querySelector(".header-bar");
		const menu = document.querySelector(".header-nav-mobile");

		if (barBtn && menu) {
			barBtn.addEventListener("click", () => {
				menu.classList.toggle("open");

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

		// Enhanced Search Functionality
		const searchBtns = document.querySelectorAll(".header-search");
		const searchBtnsMobile = document.querySelectorAll(".header-search-mobile");
		const searchBar = document.querySelector(".search-bar-container");
		const searchMobileClose = document.querySelector(".search-mobile-close");

		if (searchBtns && searchBar && searchBtnsMobile) {
			// Desktop search handling
			searchBtns.forEach((btn) => {
				btn.addEventListener("click", function () {
					toggleSearch(btn);
				});
			});

			// Mobile search handling
			searchBtnsMobile.forEach((btn) => {
				btn.addEventListener("click", function () {
					searchBar.classList.toggle("active");
					document.body.classList.toggle("search-open");

					// Toggle icon for mobile search
					const icon = btn.querySelector("i");
					if (searchBar.classList.contains("active")) {
						icon.classList.remove("fa-magnifying-glass");
						icon.classList.add("fa-times");
					} else {
						icon.classList.remove("fa-times");
						icon.classList.add("fa-magnifying-glass");
					}
				});
			});

			// Mobile search close button
			if (searchMobileClose) {
				searchMobileClose.addEventListener("click", function () {
					searchBar.classList.remove("active");
					document.body.classList.remove("search-open");
					resetSearchIcons();

					// Reset mobile search icons
					searchBtnsMobile.forEach((btn) => {
						const icon = btn.querySelector("i");
						icon.classList.remove("fa-times");
						icon.classList.add("fa-magnifying-glass");
					});
				});
			}

			// Close search on overlay click
			searchBar.addEventListener("click", function (e) {
				if (e.target === searchBar) {
					searchBar.classList.remove("active");
					document.body.classList.remove("search-open");
					resetSearchIcons();
				}
			});
		}

		function toggleSearch(btn) {
			searchBar.classList.toggle("active");
			const icon = btn.querySelector("i");

			if (searchBar.classList.contains("active")) {
				icon.classList.remove("fa-magnifying-glass");
				icon.classList.add("fa-times");
			} else {
				icon.classList.remove("fa-times");
				icon.classList.add("fa-magnifying-glass");
			}
		}

		function resetSearchIcons() {
			searchBtns.forEach((btn) => {
				const icon = btn.querySelector("i");
				icon.classList.remove("fa-times");
				icon.classList.add("fa-magnifying-glass");
			});
		}
	});
}

showMenu();
