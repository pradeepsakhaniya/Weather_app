const apiKey = "4b0f6055b30910c6356f0c5fef93c452";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherBox = document.getElementById('weather-box');
const cityName = document.getElementById('city-name');
const weatherDesc = document.getElementById('weather-desc');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
weatherIcon = document.getElementById('weather-icon');


searchBtn.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = searchInput.value.trim();
    if (city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b0f6055b30910c6356f0c5fef93c452`)
            .then(response => response.json())
            .then(data => {
                const weatherData = data.weather[0];
                cityName.textContent = data.name;
                weatherDesc.textContent = weatherData.description;
                temp.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
                weatherIcon.src = `http://weather.png
                /img/w/${weatherData.icon}.png`;
                weatherBox.style.display = 'block';
            })
            .catch(error => console.error(error));
    }
}  