import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("isOpenMenu");
		});
		$('.header-nav-mobile li[class*="menu-item-has-children"] > a').on("click", function (e) {
			e.preventDefault();
			$(this)
				.toggleClass("dropdown-active")
				.next()
				.slideToggle()
				.parent()
				.siblings()
				.find("a")
				.removeClass("dropdown-active")
				.next()
				.slideUp();
		});
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
