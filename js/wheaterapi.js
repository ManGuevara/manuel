
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-12.0432&lon=-77.0282&units=metric&exclude=hourly&appid=1dbc6bd940e7735560e705fbc24f531b';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.current.temp.toFixed(0);
    document.querySelector('#current-humidity').textContent = jsObject.current.humidity;
    document.querySelector('#day0').textContent = jsObject.daily[0].temp.day.toFixed(0);
    document.querySelector('#day1').textContent = jsObject.daily[1].temp.day.toFixed(0);
    document.querySelector('#day2').textContent = jsObject.daily[2].temp.day.toFixed(0);



  const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
  const desc = jsObject.current.weather[0].description;
  //accessing elements from the DOM;
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  document.querySelector('#weathericon').setAttribute('alt', desc);
  document.querySelector('figcaption').textContent = desc;
  
  const iconday0src= `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
  const descday0 = jsObject.daily[0].weather[0].description;
  //accessing elements from the DOM;
  document.querySelector('#day0icon').setAttribute('src', iconday0src);
  document.querySelector('#day0icon').setAttribute('alt', descday0);
  document.querySelector('figcaption').textContent = descday0;
  
  const iconday1src= `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
  const descday1 = jsObject.daily[1].weather[0].description;
  //accessing elements from the DOM;
  document.querySelector('#day1icon').setAttribute('src', iconday1src);
  document.querySelector('#day1icon').setAttribute('alt', descday1);
  document.querySelector('figcaption').textContent = descday1;

  const iconday2src= `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
  const descday2 = jsObject.daily[2].weather[0].description;
  //accessing elements from the DOM;
  document.querySelector('#day2icon').setAttribute('src', iconday2src);
  document.querySelector('#day2icon').setAttribute('alt', descday2);
  document.querySelector('figcaption').textContent = descday2;


});




