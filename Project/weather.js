document.addEventListener('DOMContentLoaded', function () {
    let apikey = "74c1b8badf13585d8d212c25371a13b0";
    const apiKey = apikey;

    const cityInput = document.getElementById('cityInput');
    const submitBtn = document.getElementById('submitBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    submitBtn.addEventListener('click', function () {
        const city = cityInput.value.trim();
        if (city === '') {
            alert('Please enter a city name');
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Process the fetched data and update the DOM
                const { name, main, weather } = data;
                const weatherDescription = weather[0].description;
                const temperature = main.temp;

                weatherInfo.innerHTML = `
                    <h2>${name}</h2>
                    <p>${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
            });
    });
});
