// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=f6dabfd84ba4dbe4e17ba9a86ac36e3f';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // This is for testing the call
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// In Dev Tool, the current temperature is found under "main" and is named "temp". Write the temperature value to "currentTemp" element variable. Use the "innerHTML" property.
function displayResults(weatherdata) {
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`; // Since this is an output statement, format the temperature to show no decimal places.

    // Use a variable to store the image address which needs to be stringed together in a literal to provide an accurate source.
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;

    // Use a variable to store the weather description.
    const desc = weatherdata.weather[0].description;
    
    // Set the src attribute for the <img> with the id of 'weathericon'.
    weatherIcon.setAttribute('src', iconsrc);

    // Set the alt attribute for the <img> for accessibility.
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = desc;

    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words.join(" ");
    console.log(words) // Test output in Dev Tool
    captionDesc.textContent = words;
}