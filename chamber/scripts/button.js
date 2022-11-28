const gridButton = document.querySelector(".grid");
const listButton = document.querySelector(".list");
const displayDirectory = document.querySelector(".cards");

// Example using arrow => function
gridButton.addEventListener("click", () => {
	displayDirectory.classList.add("grid");
	displayDirectory.classList.remove("list");
});

// Example using function
listButton.addEventListener("click", showList);

function showList() {
	displayDirectory.classList.add("list");
	displayDirectory.classList.remove("grid");
}