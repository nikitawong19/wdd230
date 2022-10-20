let temp = 37;
let wSpeed = 8;
let windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
let answer = Math.round(windChill);
document.getElementsByClassName(".windChill").innerHTML=answer;