// ===== Resize Navbar on Scroll
var navbar = document.querySelector (".navbar");

// when the scroll is higher than 20 viewport height, add the sticky class to the tag a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}

// Product Colors
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");

// Store Product Info In Object
var info = [
	{
		src: "images/products/chair_cyan.png"
	},
	{
		src: "images/products/chair_purple.png"
	},
	{
		src: "images/products/chair_blue.png"
	},
	{
		src: "images/products/chair_pink.png"
	},
	{
		src: "images/products/chair_green.png"
	},
	{
		src: "images/products/chair_red.png"
	}
]


// Change Color

cyan.addEventListener("click", function(){
	pic.src = info[0].src;
})
purple.addEventListener("click", function(){
	pic.src = info[1].src;
})
blue.addEventListener("click", function(){
	pic.src = info[2].src;
})
pink.addEventListener("click", function(){
	pic.src = info[3].src;
})
green.addEventListener("click", function(){
	pic.src = info[4].src;
})
red.addEventListener("click", function(){
	pic.src = info[5].src;
})

// Active color
function color(){
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

// Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle){
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// Closing Menu When Navlink is Clicked
const navLink = document.querySelectorAll(".nav-Link");
function linkAction(){
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction));