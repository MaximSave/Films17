'use strict';

const box = document.getElementById('box'),
	  btns = document.getElementsByTagName('button'),
	  circles = document.getElementsByClassName('cirvle'),
	  hearts = document.querySelectorAll('heart'),
	  one = document.querySelector('.heart');

	  box.style.backgroundColor = 'blue';
	  box.style.width = '500px';
	 

	  btns[1].style.borderRadius = '100%';
	  circles[1].style.backgroundColor = 'red';