document.getElementById("toggle-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents navigation
    document.querySelectorAll(".hidden-links").forEach(item => {
        item.style.display = (item.style.display === "none" || item.style.display === "") ? "block" : "none";
    });
});

