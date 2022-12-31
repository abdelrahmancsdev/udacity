/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'b31b5926029351fc8f125aa2b8f8dcaa';
const dateElement = document.querySelector('#date');
const tempElement = document.querySelector('#temp');
const contentElement = document.querySelector('#content');
const generateBtn = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'-'+ d.getDate()+'-'+ d.getFullYear();
generateBtn.addEventListener('click', ()=> {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    if(zipCode == false) {
        alert('Please enter a zip code.');
    }
    else{
        getData(baseUrl, zipCode, apiKey).then(data => postData('/addData', 
        {
             temp: data.main.temp,
              date: newDate,
               userResponse: feelings,
             }) )
             .then(() => updateUI())
             .then(()=> document.querySelector('.result').classList.add('show-result'))

    }
});

const getData = async (baseUrl, zipCode, apiKey)=> {
    const request = await fetch(`${baseUrl}zip=${zipCode}&appid=${apiKey}&units=metric`);
console.log(request);
try {
    const data =  await request.json();
    console.log(data);
    return data;
}
catch (error){
    console.log('error', error)
}}

const postData = async (url= '', data = {}) => {
    const response = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

try{
    return response;
}
catch (error){
    console.log('error', error)
}}


const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const weatherData = await request.json();
        console.log(weatherData);
        dateElement.innerHTML = weatherData.date;
        tempElement.innerHTML = weatherData.temp;
        contentElement.innerHTML = weatherData.userResponse;
    }
    catch (error){
        console.log('error', error);
    }}