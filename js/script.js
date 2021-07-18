"use strict"
document.addEventListener("DOMContentLoaded", () => {
    function ibg(){
    
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    	if(ibg[i].querySelector('img')){
    		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    	}
    }
    }
    
    ibg();
    let burger = document.querySelector('.header__burger');
    burger.addEventListener("click", function () {
        burger.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle("lock");
    });
    let menu = document.querySelector('.header');
    let anchors = document.querySelectorAll('a[href*="#"]');
    
    for (let anchor of anchors) {
    	anchor.addEventListener('click', function (e) {
    		e.preventDefault();
    		const blockID = anchor.getAttribute('href');
    		document.querySelector('' + blockID).scrollIntoView({
    			behavior: 'smooth',
    			block: 'start',
    		})
    		if (document.documentElement.clientWidth < 970 && anchor.parentNode.classList.contains('header__list')) {
    			document.querySelector('.header__burger').classList.toggle('active');
    			document.querySelector('.header__menu').classList.toggle('active');
    			document.body.classList.toggle("lock");
    		}
    
    	})
    }
    window.addEventListener("scroll", function () {
    	if (pageYOffset > 0) {
    		menu.classList.add('header_active');
    	} else {
    		menu.classList.remove('header_active');
    	};
    	if (this.pageYOffset > menu.clientTop + menu.clientHeight) {
    		menu.classList.add('header_active_s');
    	} else {
    		menu.classList.remove('header_active_s');
    	}
    });
    let mySlider = new Swiper('.team__swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        autoHeight: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        watchOverflow: true,
        spaceBetween: 30,
    
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    
        breakpoints: {
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            }
    
        },
    });
    const form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let error = formValidate(form);
    
        let formData = new FormData(form);
    
    
    
        if (error != 0) {
            alert('Заполните обязательные поля')
        } else {
            form.classList.add('_sending');
            /*let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }*/
        }
    
    
    });
    
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
    
            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile')
        // код для мобильных устройств
    } else {
    
        // код для обычных устройств
    }
});