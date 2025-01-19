// Function to update the size info
function updateSize() {
    // Get the current window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Select the div with id "sizeInfo" and update its content
    const div = document.getElementById("sizeInfo");
    div.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initial call to set the size when the page loads
updateSize();

// Add an event listener to update size on window resize
window.addEventListener("resize", updateSize);
