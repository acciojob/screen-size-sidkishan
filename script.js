//your JS code here. If required.
const screenSize = document.getElementById("sizeInfo")
screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

// onresize is a property that takes a function value. which is why

window.onresize = function(){
    screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}