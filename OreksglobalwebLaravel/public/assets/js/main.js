/***************************************************
==================== JS INDEX ======================
****************************************************
Preloader js
Data js
Sticky Nav Js
Mobile Menu Js
Search Bar Js
Rating Js
Nice Select Js
Client-slider Js
Testimonial Slider Js
Testimonial Slider 2 Js
Testimonial Slider 3 Js
Project Slider Js
Hero slider Js
Blog post slider Js
Service Slider Js
CounterUp js
VenoBox Js
Backtotop Js
Progressbar Js
Pricing Toggle
Accordion Js
Services Tab Background
Service 3 Js
Hover active
Contact map Js

****************************************************/

(function ($) {
	"use strict";
	/* --------------------------------------------
		Preloader js
	-------------------------------------------- */
	$(window).on("load", function () {
		const tjPreloader = $(".preloader");
		if (tjPreloader?.length) {
			setTimeout(function () {
				tjPreloader.removeClass("is-loading").addClass("is-loaded");
				setTimeout(function () {
					tjPreloader.fadeOut(400);
					gsapController();
				});
			}, 0);
		} else {
			gsapController();
		}
	});
	/* --------------------------------------------
		Modify Number js
	-------------------------------------------- */
	window.modifyNumber = number => {
		const numberModifiabe = number ? number : 0;
		return numberModifiabe < 10 ? `0${numberModifiabe}` : numberModifiabe;
	};

	/* --------------------------------------------
		Data js
	-------------------------------------------- */
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});
	$("[data-mask-image]").each(function () {
		var $this = $(this),
			$image = $this.data("mask-image");
		$this.css("mask-image", "url(" + $image + ")");
	});

	/* --------------------------------------------
		Back to Top Js
	-------------------------------------------- */
	function back_to_top() {
		var btn = $("#back-to-top");
		if (btn) {
			var btn_wrapper = $(".back-to-top-wrapper");

			$(window).on("scroll", function () {
				if ($(window).scrollTop() > 1200) {
					btn_wrapper.addClass("back-to-top-btn-show");
				} else {
					btn_wrapper.removeClass("back-to-top-btn-show");
				}
			});

			btn.on("click", function (e) {
				e.preventDefault();
				$("html, body").animate({ scrollTop: 0 }, "300");
			});
		}
	}
	back_to_top();

	/* --------------------------------------------
		Sticky Nav Js
	-------------------------------------------- */
	var lastScrollTop = "";
	function stickyMenu($targetMenu, $toggleClass) {
		var st = $(window).scrollTop();
		if ($(window).scrollTop() > 500) {
			if (st > lastScrollTop) {
				$targetMenu.removeClass($toggleClass);
			} else {
				$targetMenu.addClass($toggleClass);
			}
		} else {
			$targetMenu.removeClass($toggleClass);
		}

		lastScrollTop = st;
	}

	$(window).on("scroll", function () {
		if ($(".header-area").length) {
			stickyMenu($(".header-sticky"), "sticky");
		}
	});

	/* --------------------------------------------
		Mobile Menu Js
	-------------------------------------------- */
	$(".mobile_menu_bar").on("click", function () {
		$(this).toggleClass("on");
	});

	// Mobile Menu Js
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="tji-arrow-down"></i>'],
	});

	// Hamburger Menu Js
	$(".mobile_menu_bar").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
		$("body").toggleClass("overflow-hidden");
	});

	$(".hamburger_close_btn").on("click", function () {
		$(".tj-offcanvas-area").removeClass("opened");
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$("body").toggleClass("overflow-hidden");
	});
	$(".body-overlay").on("click", function () {
		$(".tj-offcanvas-area").removeClass("opened");
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$("body").toggleClass("overflow-hidden");
	});

	/* --------------------------------------------
		Search Bar Js
	-------------------------------------------- */
	$(".header-search").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("opened");
	});
	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("opened");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("opened");
	});

	/* --------------------------------------------
		Nice Select Js
	-------------------------------------------- */
	if ($(".tj-select select").length > 0) {
		$(".tj-select select").niceSelect();
	}

	/* --------------------------------------------
		Banner Slider Js
	-------------------------------------------- */
	if ($(".tj-banner-slider").length > 0) {
		var banner_slider = new Swiper(".tj-banner-slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			effect: "fade",
			speed: 1400,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".swiper-pagination-area",
				clickable: true,
			},
		});
	}

	/* 
  **********************************
  VenoBox Js
  ********************************** 
  */
	if ($(".tj-gallery").length > 0) {
		new VenoBox({
			selector: ".tj-gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	/* --------------------------------------------
		Service Slider 1 Js
	-------------------------------------------- */
	if ($(".service-slider").length > 0) {
		var serviceSlider = new Swiper(".service-slider", {
			slidesPerView: 1,
			spaceBetween: 15,
			loop: true,
			speed: 1500,
			arrow: false,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination-fnc",
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: true,
				},
				992: {
					slidesPerView: 2.6,
					spaceBetween: 20,
					centeredSlides: true,
				},

				1200: {
					slidesPerView: 3.4,
					spaceBetween: 30,
					centeredSlides: true,
				},
				1550: {
					slidesPerView: 4.22,
					spaceBetween: 30,
					centeredSlides: true,
				},
			},
		});
	}

	/* --------------------------------------------
		Testimonial Slider 1 Js
	-------------------------------------------- */
	if ($(".tj-testimonial-slider").length > 0) {
		var h1_testimonial = new Swiper(".tj-testimonial-slider", {
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 30,
			loop: true,
			speed: 1500,
			arrow: false,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".slider-next-1",
				prevEl: ".slider-prev-1",
			},
			pagination: {
				el: ".swiper-pagination-area",
				clickable: true,
			},
			breakpoints: {
				320: {
					spaceBetween: 20,
				},
				992: {
					spaceBetween: 30,
				},
			},
		});
	}

	/* --------------------------------------------
		Testimonial Slider  Js
	-------------------------------------------- */
	if ($(".fnc-testimonial-slider").length > 0) {
		var h2_testimonialSlider = new Swiper(".fnc-testimonial-slider", {
			slidesPerView: 1,
			spaceBetween: 15,
			loop: true,
			speed: 1500,
			arrow: false,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".slider-next-1",
				prevEl: ".slider-prev-1",
			},
			pagination: {
				el: ".swiper-pagination-area",
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2.8,
					spaceBetween: 20,
				},

				1200: {
					slidesPerView: 3.4,
					spaceBetween: 30,
				},
				1550: {
					slidesPerView: 3.65,
					spaceBetween: 30,
				},
			},
		});
	}

	/* --------------------------------------------
		Home 3 Testimonial Slider  Js
	-------------------------------------------- */
	if (
		$(".tj-testimonial-slider-mrc-thumb").length > 0 &&
		$(".tj-testimonial-slider-mrc").length > 0
	) {
		let thumbSliderMrc = new Swiper(".tj-testimonial-slider-mrc-thumb", {
			slidesPerView: 3,
			spaceBetween: 9,
			loop: true,
			speed: 1500,
			centeredSlides: true,
			watchSlidesProgress: true,
			slideToClickedSlide: true,
		});

		let testimonialSliderMrc = new Swiper(".tj-testimonial-slider-mrc", {
			loop: true,
			effect: "fade",
			speed: 1500,
			thumbs: {
				swiper: thumbSliderMrc,
			},
			navigation: {
				nextEl: ".slider-next-2",
				prevEl: ".slider-prev-2",
			},
		});

		testimonialSliderMrc.on("slideChange", function () {
			thumbSliderMrc.slideToLoop(testimonialSliderMrc.realIndex);
		});
	}

	/* --------------------------------------------
	 About	Testimonial Slider  Js
	-------------------------------------------- */
	if ($(".tj-testimonial-about-slider").length > 0) {
		var h1_testimonial = new Swiper(".tj-testimonial-about-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			speed: 1500,
			arrow: false,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".slider-next-1",
				prevEl: ".slider-prev-1",
			},
		});
	}

	/* --------------------------------------------
		Pricing Toggler Js
	-------------------------------------------- */
	const pricingToggle = document.getElementById("pricing-toggle");
	if (pricingToggle) {
		pricingToggle.addEventListener("change", function () {
			const prices = document.querySelectorAll(".pricing-price");
			const toggleText = document.querySelectorAll(".toggle-text");

			prices.forEach(price => {
				const monthly = price.dataset.monthly;
				const yearly = price.dataset.yearly;

				price.textContent = this.checked ? yearly : monthly;
			});

			if (this.checked) {
				toggleText[0].classList.remove("active");
				toggleText[1].classList.add("active");
			} else {
				toggleText[0].classList.add("active");
				toggleText[1].classList.remove("active");
			}
		});
	}

	/* --------------------------------------------
		Portfolio Slider  Js
	-------------------------------------------- */
	if ($(".tj-portfolio-slider").length > 0) {
		const portfolioSlider = new Swiper(".tj-portfolio-slider", {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			speed: 1000,
			navigation: {
				nextEl: ".slider-next-1",
				prevEl: ".slider-prev-1",
			},
			breakpoints: {
				768: {
					slidesPerView: 1.4,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 1.778,
					spaceBetween: 30,
				},
			},
			on: {
				init: function () {
					updateFraction(this);
				},

				slideChange: function () {
					updateFraction(this);
				},
			},
		});

		function updateFraction(swiper) {
			const current = document.querySelector(".current-slide");
			const total = document.querySelector(".total-slide");

			let currentIndex = swiper.realIndex + 1;
			let totalSlides = swiper.slides.length - swiper.loopedSlides * 2;

			current.textContent =
				currentIndex < 10 ? `0${currentIndex}` : currentIndex;

			total.textContent = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
		}
	}

	/* --------------------------------------------
		About Feature Slider  Js
	-------------------------------------------- */
	if ($(".about-feature-slider").length > 0) {
		var aboutFeatureSlider = new Swiper(".about-feature-slider", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			speed: 1500,
			arrow: false,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination-area",
				clickable: true,
			},
		});
	}

	/*---------------------------------------------------------
	 copyright year
	---------------------------------------------------------*/
	const yearEl = document.querySelector(".tj-copyright-text span");

	if (yearEl) {
		const currentYear = new Date().getFullYear();
		const spanYear = parseInt(yearEl.textContent, 10);

		if (spanYear < currentYear) {
			yearEl.textContent = currentYear;
		}
	}

	/*---------------------------------------------------------
	 Pricing switcher Js
	---------------------------------------------------------*/
	if ($(".price-switcher").length) {
		$(".price-switcher").each(function () {
			let item = $(this);
			let year = item.find(".yearly");
			let month = item.find(".monthly");
			year.on("click", function () {
				$(this).addClass("active");
				month.removeClass("active");
			});
			month.on("click", function () {
				$(this).addClass("active");
				year.removeClass("active");
			});
			$(".pricing-item-lg").each(function () {
				let item = $(this);
				let price = item.find(".tj-price");
				year.on("click", function () {
					price.text(price.data("year-price"));
				});
				month.on("click", function () {
					price.text(price.data("month-price"));
				});
			});
		});
	}

	/*---------------------------------------------------------
	 Active bgJs
	---------------------------------------------------------*/
	function activeBgAnimation() {
		const containers = document.querySelectorAll(".tj-active-bg-container");
		if (!containers?.length) return;
		containers?.forEach(container => {
			const activeBg = container.querySelector(".tj-active-bg");
			let activeElement = container.querySelector(".active");

			function updateActiveBg(element) {
				if (!element) return;

				// Get element's position relative to container
				const rect = element.getBoundingClientRect();
				const containerRect = container.getBoundingClientRect();

				const left = rect.left - containerRect.left;
				const width = rect.width;
				const height = rect.height;

				// Remove 'active' class from siblings
				container
					.querySelectorAll(".tj-active-bg-item")
					.forEach(el => el.classList.remove("active"));
				element.classList.add("active");

				// Set active background style
				activeBg.style.left = `${left - 1}px`;
				activeBg.style.width = `${width}px`;
				activeBg.style.height = `${height}px`;
			}

			// Add click listeners
			container.querySelectorAll(".tj-active-bg-item").forEach(link => {
				link.addEventListener("click", () => updateActiveBg(link));
			});

			// Initialize active background
			updateActiveBg(activeElement);
		});
	}
	activeBgAnimation();

	/* 
  **********************************
  Tj Filter Js
  ********************************** 
  */
	if ($(".tj_filter_item_wrapper")?.length) {
		$(".tj_filter_item_wrapper").imagesLoaded(function () {
			var $grid = $(".tj_filter_item_wrapper").isotope({
				itemSelector: ".tj_filter_item_wrapper .tj_filter_item",
				percentPosition: true,
				layoutMode: "fitRows",
			});

			// filter items on button click
			$(".tj_filter_btn_group").on("click", "button", function () {
				$(".tj_filter_btn_group button").removeClass("active");
				$(this).addClass("active");

				var filterValue = $(this).attr("data-filter");
				$grid.isotope({ filter: filterValue });
			});
		});
	}

	/*
	*******************************
	file upload js
	*******************************
	*/
	const fileInput = document.getElementById("inputFile");
	if (fileInput) {
		const fileNameText = document.querySelector(".upload-file-area .file-name");
		const defaultText = fileNameText.textContent;

		fileInput.addEventListener("change", function () {
			if (this.files && this.files.length > 0) {
				fileNameText.textContent = this.files[0].name;
			} else {
				fileNameText.textContent = defaultText;
			}
		});
	}

	/*---------------------------------------------------------
	 Coming soon
	---------------------------------------------------------*/
	const $wrap = $(".countdown");

	if ($wrap.length > 0) {
		const dateVal = $wrap.data("date");
		const targetTime = new Date(dateVal).getTime();

		// ⛔ Prevent NaN countdown
		if (!dateVal || isNaN(targetTime)) {
			$wrap.find(".countdown-value").text("00");
			return;
		}

		const labels = {
			day: $wrap.data("day_label") || "Days",
			hour: $wrap.data("hour_label") || "Hours",
			min: $wrap.data("min_label") || "Mins",
			sec: $wrap.data("sec_label") || "Sec",
		};

		// Cache elements once
		const el = {
			days: $wrap.find(".days .countdown-value"),
			hours: $wrap.find(".hours .countdown-value"),
			mins: $wrap.find(".minutes .countdown-value"),
			secs: $wrap.find(".seconds .countdown-value"),
			labelDays: $wrap.find(".days .countdown-heading"),
			labelHours: $wrap.find(".hours .countdown-heading"),
			labelMins: $wrap.find(".minutes .countdown-heading"),
			labelSecs: $wrap.find(".seconds .countdown-heading"),
		};

		const pad = n => String(n).padStart(2, "0");

		// Labels set once
		el.labelDays.text(labels.day);
		el.labelHours.text(labels.hour);
		el.labelMins.text(labels.min);
		el.labelSecs.text(labels.sec);

		function tick() {
			const now = Date.now();
			const diff = targetTime - now;

			if (diff <= 0) {
				el.days.text("00");
				el.hours.text("00");
				el.mins.text("00");
				el.secs.text("00");
				clearInterval(timer);
				return;
			}

			const d = Math.floor(diff / 86400000);
			const h = Math.floor((diff / 3600000) % 24);
			const m = Math.floor((diff / 60000) % 60);
			const s = Math.floor((diff / 1000) % 60);

			el.days.text(pad(d));
			el.hours.text(pad(h));
			el.mins.text(pad(m));
			el.secs.text(pad(s));
		}

		tick();
		const timer = setInterval(tick, 1000);
	}
})(jQuery);
