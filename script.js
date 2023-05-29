//your JS code here. If required.
const h1 = document.getElementById("sizeInfo");
document.body.append(h1);
//div.append(size);
function showWindowSize(){
	h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
window.onresize = showWindowSize;