	$(function(){

		$(document).ready(function() {
			var devWidth = $(window).width();
			var svgWidth;
			if (devWidth > 1250) {
				svgWidth = (813-(1920-devWidth)/2);
				$('svg').width(svgWidth);
			}
			if (devWidth <= 1250 && devWidth >= 1024) {
				svgWidth = (546-(1024-devWidth)/2);
				$('.info_background-for-tablet').css('right', '0');
				$('.info_background-for-tablet').width(svgWidth);
			}
			if (devWidth < 1024 && devWidth > 600) {
				$('.info_background-for-tablet').width(546);
			}
			if (devWidth <= 600 && devWidth >= 320) {
				svgWidth = (378-(320-devWidth));
				$('.info_background-for-tablet').width(svgWidth);
			}
			if (devWidth < 320) {
				$('.info_background-for-tablet').width(378);	
			}

			$('.portfolio_list').slick({
		  		infinite: true,
				slidesToScroll: 1,
		  		slidesToShow: 3,
				dots: false,
				responsive: [
					{
						breakpoint: 1250,
						settings: {
							arrows: false,
							dots: true,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 600,
						settings: {
							arrows: false,
							dots: true,
							slidesToShow: 1
						}
					}
				]
			});
		});

		var keys = {37 : 1, 38 : 1, 39 : 1, 40 : 1, 32 : 1, 33 : 1, 34 : 1, 35 : 1, 36 : 1};

		function preventDefault (e) {
			e = e || window.event;
			if (e.preventDefault)
				e.preventDefault();
			e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

		const disableScroll = function() {
			if (window.addEventListener)
				window.addEventListener('DOMMouseScroll', preventDefault, false);
			window.onwheel = preventDefault;
			window.onmousewheel = document.onmousewheel = preventDefault;
			window.ontouchmove = document.ontouchmove = preventDefault;
			document.onkeydown = preventDefaultForScrollKeys;
		}

		var enableScroll = function() {
			if (window.removeEventListener)
				window.removeEventListener('DOMMouseScroll', preventDefault, false);
			window.onwheel = null;
			window.onmousewheel = document.onmousewheel = null;
			window.ontouchmove = document.ontouchmove = null;
			document.onkeydown = null;
		}
		
		$('.header-nav-mobile_button').click(function(){
			if ($('.mobile-menu').is(":visible") == false) {
				$('.mobile-menu').fadeIn(disableScroll());
				$('.header-nav-mobile_button').css('background-image', 'none');
				$('.header-nav-mobile_button__close').css('visibility', 'visible');
				$('body').css('overflow', 'hidden');
			} else {
				$('.mobile-menu').fadeOut(enableScroll());
				$('.header-nav-mobile_button__close').css('visibility', 'hidden');
				$('body').css('overflow', 'auto');
				if ($(window).width() > 600) {
					$('.header-nav-mobile_button').css('background-image', 'url("img/menu_1024.png")');
				} else {
					$('.header-nav-mobile_button').css('background-image', 'url("img/menu_320.png")');
				}
			}
		});

		$('.mobile-menu').find('a').click(function(){
			$('.mobile-menu').fadeOut(enableScroll());
			$('.header-nav-mobile_button__close').css('visibility', 'hidden');
			$('body').css('overflow', 'auto');
			if ($(window).width() > 600) {
				$('.header-nav-mobile_button').css('background-image', 'url("img/menu_1024.png")');
			} else {
				$('.header-nav-mobile_button').css('background-image', 'url("img/menu_320.png")');
			}
		});

		$('.header-nav_list-href').click(function(){
			$('.header-nav_list-item_current').addClass("header-nav_list-item");
			$('.header-nav_list-item_current').removeClass("header-nav_list-item_current");
			$(this).parents('.header-nav_list-item').addClass("header-nav_list-item_current");
			$(this).parents('.header-nav_list-item').removeClass("header-nav_list-item");
		});

		$('.callback-button').click(function(){
			$('.popup-container').fadeIn(100, disableScroll());
			$('.popup').children('h2').text("Заказать звонок");
			$('.popup-container_callback').css('display', 'block');
			$('body').css('overflow-y', 'hidden');
		});

		$('.popup-container_close').click(function(){
			$('.popup-container').fadeOut(100, enableScroll());
				$('.popup-container_callback').css('display', 'none');
			$('.popup-container_order').css('display', 'none');
			$('body').css('overflow-y', 'auto');
		});

		$('.order').children('button').click(function(){
			$('.popup-container').fadeIn(100, disableScroll());
			$('.popup').children('h2').text("Заказать проект");
			$('.popup-container_order').css('display', 'block');
			$('body').css('overflow-y', 'hidden');
		});


		$(window).on('resize', function() {
			var devWidth = $(window).width();
			var svgWidth;
				if (devWidth > 1250) {
					svgWidth = (813-(1920-devWidth)/2);
					$('svg').width(svgWidth);
				}
				if (devWidth <= 1250 && devWidth >= 1024) {
					svgWidth = (546-(1024-devWidth)/2);
					$('.info_background-for-tablet').css('right', '0');
					$('.info_background-for-tablet').width(svgWidth);
				}

				if (devWidth < 1024 && devWidth > 600) {
					$('.info_background-for-tablet').width(546);
				}

				if (devWidth <= 600 && devWidth >= 320) {
				svgWidth = (378-(320-devWidth));
				$('.info_background-for-tablet').width(svgWidth);
				}
				if (devWidth < 320) {
					$('.info_background-for-tablet').width(378);	
				}
				if (devWidth > 768 && $('.mobile-menu').is(":visible") == true) {
					$('.mobile-menu').fadeOut(enableScroll());
					$('.header-nav-mobile_button__close').css('visibility', 'hidden');
					$('.header-nav-mobile_button').css('background-image', 'url("img/menu_1024.png")');
					$('body').css('overflow', 'auto');
				}

		});
	});
