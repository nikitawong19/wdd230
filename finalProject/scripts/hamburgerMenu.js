// Add and remove a class from html
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// Last modified date at footer
document.querySelector("#lastModified").textContent =  `Last Modification: ${document.lastModified}`;