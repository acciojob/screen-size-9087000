//your JS code here. If required.
function updateSize(){
	const widthElement = document.getElementById("width");
	const heightElement = document.getElementById("height");

	widthElement.textContent = window.innerWidth;
	heightElement.textContent = window.innerHeight;
}

window.addEventListener("load", updateSize);
window.addEventListener("resize", updateSize);