// const requestURL = "https://github.com/nikitawong19/wdd230/blob/main/chamber/json/data.json";
// const cards = document.querySelector('.cards');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const companies = jsonObject['companies'];
//     companies.forEach(displayCompanies);
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
// });

// function displayCompanies(company, birthdate, birthplace) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let description = document.createElement('p');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let website = document.createElement('p');
//     let portrait = document.createElement('img');

//     // Change the textContent property of the h2 element to contain the company's full name
//     h2.textContent = `${company.name}`;
//     description.textContent = `${company.description}`;
//     address.textContent = `${company.address}`;
//     phone.textContent = `${company.phone}`;
//     website.textContent = `${company.website}`;

//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute('src', company.imageurl);
//     portrait.setAttribute('alt', `Portrait of ${company.name}`);
//     portrait.setAttribute('loading', 'lazy');

//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     card.appendChild(description);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);
//     card.appendChild(portrait);

//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
// }

const requestURL = 'https://github.com/nikitawong19/wdd230/blob/main/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
    console.table(jsonObject);  // temporary checking for valid response and data parsing
});

function displayCompanies(prophet, birthdate, birthplace) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = 'Date of Birth: ' + prophet.birthdate;
    p2.textContent = 'Place of Birth: ' + prophet.birthplace;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${ordinal(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  let v = n%100;
  console.log(v)
  return n + (s[(v-20)%10] || s[v] || s[0]);
}