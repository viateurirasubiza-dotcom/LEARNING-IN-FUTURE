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
function searchLesson() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    switch(input) {
        case "p1":
            window.location.href = "classes/p1.html";
            break;
        case "p2":
            window.location.href = "classes/p2.html";
            break;
        case "math":
            window.location.href = "classes/p1.html";
            break;
        case "english":
            window.location.href = "classes/p1.html";
            break;
        case "kinyarwanda":
            window.location.href = "classes/p1.html";
            break;
        default:
            alert("Nta somo ribonetse");
    }
}
