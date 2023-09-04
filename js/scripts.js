// variables

/* const button = document.querySelector(".button") */


// events


// functions

async function searchCountry() {
    const input = document.querySelector("#input").value
    const url = `https://restcountries.com/v3.1/name/${input}`
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
        
    showCountryInformation(data);
} 

function showCountryInformation(data) {
    const loading = document.querySelector("#loading")
    
    if(data.error) {
        loading.innerText = "Country not found. Please make sure the country name is written in English."
        loading.style.color = "red"
    } else {
        loading.innerHTML = `<p># Name: ${data.name}</p>
                        <p># Population: ${data.population}</p>
                        <p># Capital: ${data.capital}</p>
                        <p># Region: ${data.region}</p>
                        <p># Continent: ${data.continents}</p>
                        <p># Currency: ${data.currencies}</p>
                        <p># Language: ${data.languages}</p>
                        <p># Borders: ${data.borders}</p>
                        <p># Gini index: ${data.gini}</p>`                       
    }  
}


