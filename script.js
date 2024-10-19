//your JS code here. If required.
window.addEventListener('resize',displayWindowSize);

 function displayWindowSize() {
 	let width = window.innerWidth;
	 let height = window.innerHeight;
	 let sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
 }


displayWindowSize();



//your JS code here. If required.
//your JS code here. If required.
// window.addEventListener('resize', displayWindowSize);


// function displayWindowSize() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     let sizeInfo = document.getElementById('sizeInfo');
//     sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
// }

// displayWindowSize();