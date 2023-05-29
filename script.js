//your JS code here. If required.
const div = document.getElementById("sizeInfo");
document.body.append("div");
//div.append(size);
function showWindowSize(event){
	size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
window.onresize = showWindowSize;