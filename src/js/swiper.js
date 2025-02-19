import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Grid } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperHome5();
	swiperHome7();
	swiperHomeBannerMobile();
}

function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade],
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
	});
}

function swiperHomeBannerMobile() {
	const swiperHomeBannerMobile = new Swiper(".swiper-home-banner-mobile ", {
		modules: [Autoplay, Navigation, EffectFade],
		slidesPerView: 1,
		speed: 1200,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		// autoplay: {
		// 	delay: 3500,
		// },
		navigation: {
			nextEl: ".home-1-mobile .btn-next",
			prevEl: ".home-1-mobile .btn-prev",
		},
	});
}

function swiperHome5() {
	const swiper = new Swiper(".home-5-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		modules: [Autoplay, Navigation], // Đảm bảo đã import EffectFade
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		grabCursor: true,
		speed: 1500,
		navigation: {
			nextEl: ".home-5 .btn-next",
			prevEl: ".home-5 .btn-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}

function swiperHome7() {
	const swiper = new Swiper(".home-7-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		modules: [Autoplay, Navigation, Grid],
		loop: true,
		grid: {
			rows: 2,
			fill: "row",
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		grabCursor: true,
		speed: 1500,
		navigation: {
			nextEl: ".home-7 .btn-next",
			prevEl: ".home-7 .btn-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}
