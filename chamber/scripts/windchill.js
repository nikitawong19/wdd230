const currentTemp = parseInt(document.querySelector('.currentTemp').innerText);
const currentWindSpeed = parseInt(document.querySelector('.currentWind').innerText);

let currentWindChill = "";
if (currentTemp <= 50 && currentWindSpeed > 3.0) {
    currentWindChill = Math.round(35.74 + (0.6215 * currentTemp ) - (35.75 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16) )).toString() + "°F";
} else {
    currentWindChill = "N/A"
}

document.querySelector('.windChillCell').innerText = String(currentWindChill)