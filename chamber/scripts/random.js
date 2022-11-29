const requestURL = "https://nikitawong19.github.io/wdd230/chamber/json/data.json";
const spotlight1 = document.querySelector('.spotlight1');
const spotlight2 = document.querySelector('.spotlight2');
const spotlight3 = document.querySelector('.spotlight3');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let companies = jsonObject['companies'];
    let specialCompany = [];
    companies.forEach((company) => {
        if (company.membershipLevel === 'Gold' || company.membershipLevel === 'Silver') {
            specialCompany.push(company);
        // Display 3 companies randomly
        let randomCompanies = [];
        // console.log(Math.floor(Math.random() * 3));
        // randomCompanies.push(specialCompany[Math.floor(Math.random() * specialCompany.length)]);  // Use Math.random() function to get the random number between(0-1, 1 exclusive). Multiply it by the array length to get the numbers between(0-arrayLength). Use Math.floor() to get the index ranging from(0 to arrayLength-1).
        // console.log(randomCompanies)
        // randomCompanies.push(specialCompany[Math.floor(Math.random() * specialCompany.length)]);
        // randomCompanies.push(specialCompany[Math.floor(Math.random() * specialCompany.length)]);
        } 
    })
    // console.log(specialCompany);

    getRandomCompanies(specialCompany);

    // companies.forEach(displayCompanies);
});

function getRandomCompanies(array) {
    const listOfRandomCompanies = array.sort(() => 0.5 - Math.random);
    console.log(listOfRandomCompanies)
    return listOfRandomCompanies.slice(0,3)
}

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