function searchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '38a46c1b689f6fc5d03a86eacb6b887f';

    const dataContainer = document.querySelector('.data-container');
    const hourlyContainer = document.querySelector('.hourly-container');

    dataContainer.innerHTML = '';
    hourlyContainer.innerHTML = '';

    let isFound = true;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.querySelector('.data-container');

            dataContainer.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Max Temperature: ${data.main.temp_max}°C</p>
                <p>Min Temperature: ${data.main.temp_min}°C</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            isFound = true;
        })
        .catch(error => {
                // dataContainer.innerHTML = `<h1>City not found (404)</h1>`;
                dataContainer.innerHTML = ` <h1>404 - Page Not Found</h1>
                <p>Oops, it seems like you've wandered into uncharted territory.</p>
                <div class="robot">🤖</div>
                <p>Don't worry, even robots make wrong turns. You can <a href="/">go back home</a> or explore more.</p>`;
                console.error('Error fetching current weather data:', error);
                isFound = false;
        });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&cnt=8&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            // alert(dataContainer.innerHTML);

            if( isFound){
                hourlyContainer.innerHTML = "<h2>Hourly Forecast for the next 24 hours:</h2>";

                const next8Hours = data.list.slice(0, 8);

                next8Hours.forEach(hour => {
                    const hourDate = new Date(hour.dt * 1000);
        
                    const iconCode = hour.weather[0].icon; 
        
                    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

                    const hourDiv = document.createElement('div');
                    hourDiv.style.marginRight ="10px";
                    hourDiv.innerHTML = `
                        <img src="${iconUrl}" alt="Weather Icon">
                        <p>${hourDate.toLocaleTimeString()}: <b>${hour.main.temp}°C</b></p>
                        <b>${hour.weather[0].description}</b>
                    `;
                    hourlyContainer.appendChild(hourDiv);
                });
            }
            else {
                hourlyContainer.innerHTML = ''; 
            }
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
        });
    
}