// Website loaded
console.log("Primary Learning Rwanda Loaded");

// Welcome Message
window.onload = function () {
    alert("Murakaza neza kuri Primary Learning Rwanda!");
};

// Function yo gushaka amasomo
function searchLesson() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (input.includes("math")) {
        window.location.href = "subjects/mathematics.html";
    } else if (input.includes("english")) {
        window.location.href = "subjects/english.html";
    } else if (input.includes("kinyarwanda")) {
        window.location.href = "subjects/kinyarwanda.html";
    } else if (input.includes("science")) {
        window.location.href = "subjects/science.html";
    } else {
        alert("Isomo ntiryabonetse.");
    }
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
