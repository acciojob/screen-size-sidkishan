//your JS code here. If required.
function showWindowSize(event){
	let width = document.getElementById("width");
	let height = document.getElementById("height");
	width.innerText = window.screen.width;
	height.innerText = window.screen.height;
}
window.onresize = showWindowSize;