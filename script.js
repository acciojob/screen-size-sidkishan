//your JS code here. If required.
function showWindowSize(){
	let width = document.getElementById("width");
	let height = document.getElementById("height");
	width.innerText = window.innerWidth;
	height.innerText = window.innerHeight;
}
window.onresize = showWindowSize;