// JavaScript Document
document.getElementById("main").addEventListener("click", scroll);
document.addEventListener("keydown", scroll);

function scroll(){
	var h = window.innerHeight;
	window.scrollTo(0,h);
	console.log(h);
}
function redesign(){
	var elnum2 = document.getElementById("nummer2");
	var color1 = document.getElementById("color2");
elnum2.style.bottom=-elnum2.clientHeight + "px";
color2.style.bottom=-elnum2.clientHeight-color1.clientHeight + "px";
}
document.onreadystatechange = function(){
	redesign();
	window.onresize = redesign;
}
function scroll2(){
	var h = window.innerHeigth;
	window.scrollTo(0,document.getElementById("nummer2").scrollTop);
}