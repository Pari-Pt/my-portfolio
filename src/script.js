let nightModeButtonEl = document.querySelector("#night-mode-button");
let dayModeButtonEl = document.querySelector("#day-mode-button");
let weatherAppImgEl = document.querySelector("#weather-app-img");
let weatherAppImgElHtml = "";

function displayNightMode(){
    weatherAppImgElHtml="";
    weatherAppImgElHtml=`<img src="/images/weather/night-weather.png" class="img-fluid night-weather" alt="Weather App Night Mode"/>`;
    weatherAppImgEl.innerHTML= weatherAppImgElHtml;
    
    
    nightModeButtonEl.classList.remove("enabled");
    nightModeButtonEl.classList.add("disabled");
    
    dayModeButtonEl.classList.remove("disabled");
    dayModeButtonEl.classList.add("enabled");
}

nightModeButtonEl.addEventListener("click", displayNightMode);



function displayDayMode(){
    weatherAppImgElHtml="";
    weatherAppImgElHtml=`<img src="/images/weather/day-weather.png" class="img-fluid day-weather mt-1 mb-4 rounded shadow" alt="Weather App Day Mode"/>`;
    weatherAppImgEl.innerHTML= weatherAppImgElHtml;
    
    dayModeButtonEl.classList.remove("enabled");
    dayModeButtonEl.classList.add("disabled");
    
    nightModeButtonEl.classList.remove("disabled");
    nightModeButtonEl.classList.add("enabled");
}

dayModeButtonEl.addEventListener("click", displayDayMode);