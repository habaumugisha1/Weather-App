const searchForm = document.querySelector(".search-loaction");
const cityName = document.querySelector('.city-name p');
const bodyCard = document.querySelector('.card-body')

searchForm.addEventListener('submit', (e) => {
e.preventDefault();
const cityValue = document.querySelector('.search-loaction input');
const citySearched = cityValue.value.trim()
console.log(citySearched)
searchForm.reset();


const changeToCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius
}

updateWeatherApp = (city) => {
    console.log(city)
    cityName.textContent = city.name;
    bodyCard.innerHTML =`
    <div class="card-mid row">
    <div class="col text-center temp">
        <span>${changeToCelcius(city.main.temp)}&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].main}</p>
        <p class="high">${changeToCelcius(city.main.temp_max)}&deg;C</p>
        <p class="low">${changeToCelcius(city.main.temp_min)}&deg;C</p>
    </div>
</div>
<div class="icon-container card shadow mx-auto">
    <img src="./img/clouds-svgrepo-com.svg" alt="" class="cat=rd-img top">
</div>
<div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
        <p>${changeToCelcius(city.main.feels_like)}&deg;C</p>
        <p>Feels Like</p>
    </div>
    <div class="col text-center">
        <p>${city.main.humidity}%</p>
        <p>Humidity</p>
    </div>
</div>
    `

}



requestCity(citySearched)
   .then((data) =>{
       updateWeatherApp(data)
        })
    .catch( (error) => {
        console.log(error.message)
    })

})