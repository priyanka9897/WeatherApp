const apiKey = "c46c5f7771464b02a9444718260901";

function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (location === "") {
    alert("Please enter a location");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById("weatherResult").innerHTML =
          `<p>Location not found ❌</p>`;
        return;
      }

      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const icon = data.current.condition.icon;
      const city = data.location.name;
      const country = data.location.country;

      document.getElementById("weatherResult").innerHTML = `
        <h2>Location : ${city}, ${country}</h2>
        <img src="https:${icon}" alt="Weather Icon">
        <h3>Temperature : ${temp}°C</h3>
        <p>Condition : ${condition}</p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherResult").innerHTML =
        `<p>Something went wrong ⚠️</p>`;
    });
}
