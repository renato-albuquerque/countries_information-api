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
    
    loading.innerHTML = 
        `<p># Name: ${data[0].name.common}</p>
        <p># Population: ${data[0].population.toLocaleString('pt-BR')}</p>
        <p># Capital: ${data[0].capital}</p>
        <p># Region: ${data[0].region}</p>
        <p># Continent: ${data[0].continents}</p>
        <p># Currency: ${data.currencies}</p>
        <p># Language: ${data.languages}</p>
        <p># Borders: ${data[0].borders}</p>
        <p># Gini index: ${data.gini}</p>`
}  
    



/* if(data.error) {
    loading.innerText = "Country not found. Please make sure the country name is written in English."
    loading.style.color = "red"
} else {

} */
