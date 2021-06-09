'use strict'
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 2000) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});
});





let windowHeight = window.innerHeight;
window.addEventListener('scroll', function (e) {
	let menu = document.getElementsByClassName('itemA');
	let blocks = document.getElementsByClassName('section');
	let active = '';
	let off = '';
	for (let block of blocks) {

		let position = block.getBoundingClientRect();
		let posTop = position.top;
		let posHeight = position.height;
		let href = block.getAttribute('id');
		if (posTop < windowHeight - posHeight && posTop > - posHeight) {
			active = '#' + href

			for (let item of menu) {
				let res = item.getAttribute('href')
				if (res == active) {
					item.classList.add('itemActive')
				}
			}

		} else {
			off = '#' + href
			for (let item of menu) {
				let res = item.getAttribute('href')
				if (res == off) {
					item.classList.remove('itemActive')
				}
			}
		}
		// console.log('start', start)
		// console.log('end', end)
	}
})
for (let link of document.getElementsByClassName('itemA')) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let idSection = this.getAttribute('href');
		let pos = document.querySelector(idSection).getBoundingClientRect();
		window.scrollTo({
			top: pos.y,
			left: 0,
			behavior: 'smooth',
		})
	})
}
