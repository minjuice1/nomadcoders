const API_KEY = "225ceae7b9ba88e8a410f328c51df6e8"

function onGeoSuccess(position) {
  const lat = position.coords.latitude; 
  const lng = position.coords.longitude; 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  // fetch(url); 찍고 network 확인해보면 json 형태의 data 확인할 수 있음
  // promise (비동기 작업) 이기에, then()을 하고 reponse, data 등의 작업을 해야 한다.
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert("Can't find you, No weather for you.")
}

// navigator.geolocation.getCurrentPosition(success[, error[, [options]])
// success : A callback function that takes a GeolocationPosition object as its sole input parameter.
// error : An optional callback function that takes a GeolocationPositionError object as its sole input parameter.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
