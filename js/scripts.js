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
        `<p># Name: ${data[0].name.common} / ${data[0].fifa}</p>
        <p># Population: ${data[0].population.toLocaleString('pt-BR')} people</p>
        <p># Area: ${data[0].area.toLocaleString('pt-BR')} km²</p>
        <p># Capital: ${data[0].capital}</p>
        <p># Region: ${data[0].region}</p>
        <p># Continent: ${data[0].continents}</p>
        <p># Currency: ${JSON.stringify(data[0].currencies, null, 2)}</p>
        <p># Language: ${JSON.stringify(data[0].languages, null, 2)}</p>    
        <p># Borders: ${JSON.stringify(data[0].borders, null, 2)}</p>
        <p># Gini index: ${JSON.stringify(data[0].gini, null, 2)}</p>` 
}  
    



/* if(data.error) {
    loading.innerText = "Country not found. Please make sure the country name is written in English."
    loading.style.color = "red"
} else {

} */
