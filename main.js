"use strict"

/** Global Variables **/
let city = document.getElementById('city-name'),
    searchInput = document.getElementById('city'),
    temp = document.getElementById('tempreture'),
    minTemp = document.getElementById('min-temp'),
    maxTemp = document.getElementById('max-temp'),
    description = document.getElementById('description'),
    date = document.getElementById('date'),
    date2 = document.getElementById('date2'),
    date3 = document.getElementById('date3'),
    date4 = document.getElementById('date4'),
    date5 = document.getElementById('date5'),
    icon = document.getElementById('icon'),
    icon2 = document.getElementById('icon2'),
    icon3 = document.getElementById('icon3'),
    icon4 = document.getElementById('icon4'),
    icon5 = document.getElementById('icon5'),
    icon6 = document.getElementById('icon6'),
    day2 = document.getElementById('day2'),
    day3 = document.getElementById('day3'),
    day4 = document.getElementById('day4'),
    day5 = document.getElementById('day5'),
    day6 = document.getElementById('day6')

/*** History Part ***/
let historyBtn= document.getElementById('historyBtn'),
    historyItem=document.querySelector('#historyItem'),
    closeBtn= document.querySelector('.closeBtn'),
    historyContainer= document.querySelector('.history-container'),
    historyList = document.querySelector('.history-part'),
    historyCities = document.querySelectorAll('.historyList li');
   
/*** Search part ***/
let searchBtn= document.getElementById('searchBtn');

/*** URL Key ***/
const key = '2143c3b648fa6801136a86ca8d608a79';



/** Fetch API **/
    function getTemperatureData() {
   
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${key}&units=metric`)
       .then(function(responce) {
           return responce.json();
       })
       .then(function(data) {
           console.log(data);
         
           /* pass the list of 5 days to the variable */
           let  theForecastOfDays = [];
           theForecastOfDays = data.list; 
         
           /* pass city name to the DOM */
           city.innerHTML= data.city.name;
           description.innerHTML = theForecastOfDays[0].weather[0].description;

           /* pass the temprature of the first day to the DOM */
           date.innerHTML= new Date(theForecastOfDays[0].dt_txt.slice(0,10)).toDateString().slice(0,10);
           temp.innerHTML=  theForecastOfDays[0].main.temp.toFixed();
           minTemp.innerHTML=  theForecastOfDays[0].main.temp_min.toFixed();
           maxTemp.innerHTML=  theForecastOfDays[0].main.temp_max.toFixed();
           icon.innerHTML= `<img src="https://openweathermap.org/img/w/${theForecastOfDays[0].weather[0].icon}.png" />`;

           /* Weather Forecast for day2 */
           day2.innerHTML= theForecastOfDays[8].main.temp.toFixed();
           date2.innerHTML= new Date(theForecastOfDays[8].dt_txt.slice(0,10)).toDateString().slice(0,3);
           icon2.innerHTML= `<img src="https://openweathermap.org/img/w/${theForecastOfDays[8].weather[0].icon}.png" 
                              alt= ${theForecastOfDays[8].weather[0].description}/>`;
           /* Weather Forecast for day3 */
           day3.innerHTML= theForecastOfDays[16].main.temp.toFixed();
           date3.innerHTML= new Date(theForecastOfDays[16].dt_txt.slice(0,10)).toDateString().slice(0,3);
           icon3.innerHTML= `<img src="https://openweathermap.org/img/w/${theForecastOfDays[16].weather[0].icon}.png" 
                              alt= ${theForecastOfDays[8].weather[0].description}/>`;
           /* Weather Forecast for day4 */
           day4.innerHTML= theForecastOfDays[24].main.temp.toFixed();
           date4.innerHTML= new Date(theForecastOfDays[24].dt_txt.slice(0,10)).toDateString().slice(0,3);
           icon4.innerHTML= `<img src="https://openweathermap.org/img/w/${theForecastOfDays[24].weather[0].icon}.png" 
                              alt= ${theForecastOfDays[8].weather[0].description}/>`;
           /* Weather Forecast for day5 */
           day5.innerHTML= theForecastOfDays[32].main.temp.toFixed();
           date5.innerHTML= new Date(theForecastOfDays[32].dt_txt.slice(0,10)).toDateString().slice(0,3);
           icon5.innerHTML= `<img src="https://openweathermap.org/img/w/${theForecastOfDays[32].weather[0].icon}.png" 
                              alt= ${theForecastOfDays[8].weather[0].description}/>`;
           
       });

            /****  Add Searched Cities to history list ****/
            let historyCity=[];
                localStorage.setItem('cityName', JSON.stringify(searchInput.value));
                historyCity = JSON.parse(localStorage.getItem('cityName'));
                console.log(historyCity);
            
            const saveData= ()=> {
                /*hisCity.insertAdjacentHTML('afterbegin', markup);*/
                let markup= `<li>${historyCity}</li>`;
                historyItem.insertAdjacentHTML('afterbegin', markup);
            }
        saveData();


};

/** Trigger the fetch URL **/
searchBtn.addEventListener('click', getTemperatureData);

/** show the history list **/
historyBtn.addEventListener('click', ()=> {
    historyContainer.classList.add('show')
    historyList.classList.add('show');
})

/** Hide or Close the history list */
historyContainer.addEventListener('click', ()=> {
    historyContainer.classList.remove('show')
    historyList.classList.remove('show');
})
closeBtn.addEventListener('click', ()=> {
    historyContainer.classList.remove('show')
    historyList.classList.remove('show');
})









