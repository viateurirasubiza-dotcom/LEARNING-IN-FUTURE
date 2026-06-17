console.log("Primary Learning Rwanda Loaded");

// Safe welcome message
window.onload = function () {
    alert("Murakaza neza kuri Primary Learning Rwanda!");
};

// Search function (FIXED PATHS)
function searchLesson() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (input.includes("math")) {
        window.location.href = "classes/p1.html";
    } 
    else if (input.includes("english")) {
        window.location.href = "classes/p1.html";
    } 
    else if (input.includes("kinyarwanda")) {
        window.location.href = "classes/p1.html";
    } 
    else if (input.includes("science")) {
        window.location.href = "classes/p1.html";
    } 
    else {
        alert("Nta somo ribonetse. Gerageza: math, english, kinyarwanda...");
    }
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
