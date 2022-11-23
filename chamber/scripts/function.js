// In order for javaScript to communicate with the menu we need to add class or id to html
// function toggleMenu() {
//     console.log("It Worked!") /* when click on hamburgerBtn, the console will print this word to prove that the following code is correct*/
// }

// use javaScript to add and remove a class from html
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// the date at the middle screen
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// the last modified date at footer
document.querySelector("#lastModified").textContent =  `Last Modification: ${document.lastModified}`;


// A hidden field that contains the current date and time that the form was loaded by the user.
// const d = new Date();
// document.getElementById("date").value = d.toDateString();
// let hours = d.getHours();
// let mins = d.getMinutes();
// let seconds = d.getSeconds();
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;