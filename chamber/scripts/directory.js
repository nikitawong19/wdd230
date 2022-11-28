const requestURL = "https://nikitawong19.github.io/wdd230/chamber/json/data.json";
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

function displayCompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('div');
  let h3 = document.createElement('h3');
  let description = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let website = document.createElement('p');
  let portrait = document.createElement('img');
  
  // Change the textContent property of the h3 element and others to contain the company's full name and etc.
  h3.textContent = `${company.name}`;
  description.textContent = `${company.description}`;
  address.textContent = `${company.address}`;
  phone.textContent = `${company.phone}`;
  website.textContent = `${company.website}`;
  
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Portrait of ${company.name}`);
  portrait.setAttribute('loading', 'lazy');
  
  // Add/append the section(card) with the h3 element and etc.
  card.appendChild(portrait);
  card.appendChild(h3);
  card.appendChild(description);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  card.classList.add('column');

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}