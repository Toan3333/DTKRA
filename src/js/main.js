import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
import { showMenu } from "./menu";
$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	showMenu();
	// countUpInit();
	console.log("ok");
});

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
