// Get the modal
var modal = document.getElementById("imageModal");

// Display the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Disable background scrolling
}

// When the user clicks on <span> (x), close the modal
document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Re-enable background scrolling
}

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable background scrolling
    }
}