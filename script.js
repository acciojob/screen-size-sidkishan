//your JS code here. If required.
const size = document.getElementById("windowSize");
function showWindowSize(event){
	size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
window.onresize = showWindowSize;