var elForm = document.querySelector("[data-form]");
var elInput = document.querySelector("[data-input]");
var elHeadingPeople = document.querySelector("[data-heading-people]");
var elHeadingBike = document.querySelector("[data-heading-bike]");
var elHeadingCar = document.querySelector("[data-heading-car]");
var elHeadingPlane = document.querySelector("[data-heading-plane]");
var people = 3.6;
var bike = 20.1; 
var car = 70; 
var plane = 800;
var distance;

elForm.addEventListener("submit" , function(evt) {
  evt.preventDefault();
  distance = +elInput.value;

  if (isNaN(distance)) {
    alert("son kiriting");
    elInput.value = "";
    return;
  }

  if (distance < 0) {
    alert("musbat son kiriting");
    elInput.value = "";
    return;
  }

  if (distance < 0) return;
  displayTime(elHeadingPeople , people);
  displayTime(elHeadingBike , bike);
  displayTime(elHeadingCar , car);
  displayTime(elHeadingPlane , plane);
})




function extractFloatingPoint(number) {
  return number - Math.floor(number);
}

function displayTime(el, speed) {
  var hour = distance / speed;
  var floatingHour = extractFloatingPoint(hour);
  var intHour = hour - floatingHour;
  var intMinute = Math.round(floatingHour * 60);

  if (intHour !== 0) {
    el.textContent = `${intHour} soat ${intMinute} minut`;
  } else {
    el.textContent = `${intMinute} minut`;
  }
}