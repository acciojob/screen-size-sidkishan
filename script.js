//your JS code here. If required.
const div = document.getElementById("sizeInfo");
const size = document.createElement("h1");
div.append(size);
function showWindowSize(event){
	size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
window.onresize = showWindowSize;