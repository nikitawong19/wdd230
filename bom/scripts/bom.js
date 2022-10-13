// Create 3 variables that hold references to the list (<input>), <button>, and <ul> elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create a function when button being clicked.
button.addEventListener('click', function() {
    const myItem = input.value; // Storing the input's current value in a variable.
    input.value = ''; // Empty the input by setting its value to an empty string — ''.

    // Create 3 new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const dltButton = document.createElement('dltButton');

    listItem.appendChild(listText); // Append the span and the button as children of the list item.
	listText.textContent = myItem; // Set the text content of the span to the input element value
	listItem.appendChild(dltButton);
	dltButton.textContent = '❌'; // Set the text content of the button to a symbol X for delete or the word 'Delete' also can.
	list.appendChild(listItem); // Append the list item as a child of the list.

    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    dltButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();
});