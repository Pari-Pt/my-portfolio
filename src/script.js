
function displayNightMode(){
    weatherAppImgElHtml="";
    weatherAppImgElHtml=`<img src="/images/weather/night-weather.png" class="img-fluid night-weather mt-1 mb-4 rounded shadow" alt="Weather App Night Mode"/>`;
    weatherAppImgEl.innerHTML= weatherAppImgElHtml;
    
    
    nightModeButtonEl.classList.remove("enabled");
    nightModeButtonEl.classList.add("disabled");
    
    dayModeButtonEl.classList.remove("disabled");
    dayModeButtonEl.classList.add("enabled");
}




function displayDayMode(){
    weatherAppImgElHtml="";
    weatherAppImgElHtml=`<img src="/images/weather/day-weather.png" class="img-fluid day-weather mt-1 mb-4 rounded shadow" alt="Weather App Day Mode"/>`;
    weatherAppImgEl.innerHTML= weatherAppImgElHtml;
    
    dayModeButtonEl.classList.remove("enabled");
    dayModeButtonEl.classList.add("disabled");
    
    nightModeButtonEl.classList.remove("disabled");
    nightModeButtonEl.classList.add("enabled");
}

let weatherAppImgEl = document.querySelector("#weather-app-img");
let nightModeButtonEl = document.querySelector("#night-mode-button");
nightModeButtonEl.addEventListener("click", displayNightMode);

let dayModeButtonEl = document.querySelector("#day-mode-button");
dayModeButtonEl.addEventListener("click", displayDayMode);
