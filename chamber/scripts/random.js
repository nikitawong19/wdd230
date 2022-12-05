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

        // Add companies to a new list only if they are gold and silver members.
        let specialCompany = [];
        companies.forEach((company) => {
            if (company.membershipLevel === 'Gold Member' || company.membershipLevel === 'Silver Member') {
                specialCompany.push(company);
            }
        });
            // Add random companies to a new list.
        let randomCompanies = [];

        // Out of the gold and silver member companies, pick 3 randomly without repetition and add to a new list of random companies.
        for (let i = 0; i < 3; i++) {

            // Math.random() function is to get the random companies between(0-1, 1 exclusive). 
            // Multiply it by the array length to get the numbers between(0-arrayLength). 
            // Math.floor() function is to round down the number. 
            // For example: 0.375 * 5 = 1.5 (round down to 1)
            let randomCompany = specialCompany[Math.floor(Math.random() * specialCompany.length)]

            randomCompanies.push(randomCompany);

            // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
            // Syntax: indexOf(searchElement) / indexOf(searchElement, fromIndex)
            let index = specialCompany.indexOf(randomCompany);

            // The splice() method is to remove or replace existing elements with new ones.
            // First parameter indicate the start index where the splice operation starts. Second parameter indicate how many elements you want to remove from the array.
            specialCompany.splice(index, 1); 
        }
        console.log(randomCompanies);

        displayCompanies(randomCompanies[0], spotlight1);
        displayCompanies(randomCompanies[1], spotlight2);
        displayCompanies(randomCompanies[2], spotlight3);
});

function displayCompanies(company, spotlightDivNum) {
    // Create elements to add to the document
    // let card = document.createElement('div');
    let card = spotlightDivNum;
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
}