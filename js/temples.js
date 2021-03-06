//store the resource, the URL of the JSON file into a const variable
const requestURL = 'https://manguevara.github.io/manuel/data/data.json';
const cards = document.querySelector('.cards');
let dataRequest;

// basic fetch() method and feed it the required argument, 
//the URL and use the .then() method that returns a Promise 
//which response we will work with as an argument to an anonymous function.
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //store the results of the converted response into an array 
        //since the data source is a neatly packed array of records 
        //named "logosinfo".
        const temples = jsonObject['temples'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        //logosinfo.forEach(displayProphets);
        dataRequest = temples;
        temples.forEach(displayTemples);    
        });


function displayTemples(templo){
    // Create elements to add to the document
    let card = document.createElement('section');
    let imagen = document.createElement('img');
    let h1 = document.createElement('h1');
    let p1 = document.createElement('p');
    let h2 = document.createElement('h2');
    let ul1 = document.createElement('ul');
    let h3 = document.createElement('h2');
    let ul2 = document.createElement('ul');
    

    // Build the image attributes by using the setAttribute method for the src
    //, alt, and loading attribute values.
    imagen.setAttribute('src',templo.imageurl);
    imagen.setAttribute('alt',`Logo of ${templo.name}`);
    imagen.setAttribute('loading','lazy');
     // Change the textContent property of the p elements
   
    h1.textContent = `Temple name: ${templo.name}`;
    p1.textContent = `Temple address: ${templo.address}`;
    h2.textContent = `Services`
    
    h3.textContent = `Closures`
    
    

    const service = templo.services;
    for(var j=0; j< service.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = service[j];
        ul1.appendChild(listItem)
    }

    const closure = templo.closures;
    for(var j=0; j< closure.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = closure[j];
        ul2.appendChild(listItem)
    }

    // Add/append the section(card) with the h2 element
    
    card.appendChild(imagen);
    card.appendChild(h1);
    card.appendChild(p1);
    card.appendChild(h2);
    card.appendChild(ul1);
    card.appendChild(h3);
    card.appendChild(ul2);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}
