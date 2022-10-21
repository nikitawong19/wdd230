// A shortcut method for creating dynamic date that will automatically update the date every day.
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector('.date').textContent = new Date().toLocaleDateString('en-US', options);

// show or hide the event reminder
let date = new Date();
let weekday = date.toLocaleDateString("default",{weekday:"long"});
if (weekday === "Monday" || weekday === "Tuesday") {
    document.querySelector(".reminder").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    let reminder = document.querySelector(".reminder");
    reminder.remove();
}

