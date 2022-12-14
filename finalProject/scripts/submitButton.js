function logSubmit(event) {
    log.textContent = `Thank you! Form has been submitted.`;
    event.preventDefault();
}

const form = document.querySelector('#form');
const log = document.querySelector('.message');
form.addEventListener('submit', logSubmit);

