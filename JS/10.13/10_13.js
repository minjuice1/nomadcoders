function onGeoSuccess(position) {
  const lat = position.coords.latitude; 
  const lng = position.coords.longitude; 
  console.log("You live in", lat, lng);
  // console.log(position)
}

function onGeoError() {
  alert("Can't find you, No weather for you.")
}

// navigator.geolocation.getCurrentPosition(success[, error[, [options]])
// success : A callback function that takes a GeolocationPosition object as its sole input parameter.
// error : An optional callback function that takes a GeolocationPositionError object as its sole input parameter.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);