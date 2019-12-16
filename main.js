document.getElementById("mybtn").onclick = async () => {
    let p = document.getElementById("city").value;
    let key = 'paste your api key';

    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${p}&units=metric&APPID=${key}`)
    var data2 = await data.json();

    document.getElementById("info").innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${data2.name}</h5>
                        <p class="card-text">${data2.weather[0].description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Temperature:</b> ${data2.main.temp} Celcius</li>
                        <li class="list-group-item"><b>Wind:</b> ${data2.wind.speed} kmph</li>
                        <li class="list-group-item"><b>Humidity:</b> ${data2.main.humidity} %</li>
                    </ul>
                </div>
            `;
}