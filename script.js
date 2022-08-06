let elForm = document.querySelector('.form');
let elInput = document.querySelector('.input');
let elSelection = document.querySelector('.selection');
let elResult = document.querySelector('.result1');
let elResultSecond = document.querySelector('.result2');

elForm.addEventListener('submit', function (event){
  event.preventDefault();

  if (elSelection.value == 'Fahrenheit') {
    elResult.textContent = 'In Celsius:  ' + (((elInput.value - 32) / 1.8).toFixed(2)) + ' °C';
    elResultSecond.textContent = 'In Kelvin:  ' + ( (((elInput.value - 32) / 1.8) + 273.15).toFixed(2)) + 'K';
    return;
  }
  if (elSelection.value == 'Kelvin') {
    elResult.textContent = 'In Celsius:  ' + ((elInput.value - 273.15).toFixed(2)) + ' °C';
    elResultSecond.textContent = 'In Fahrenheit:  ' + ( (((elInput.value - 273.15) * 1.8) + 32).toFixed(2)) + ' °F';
    return;
  }
  if (elSelection.value == 'Celsius') {
    elResult.textContent = 'In Kelvin:  ' + (elInput.value + 273.15) + 'k';
    elResultSecond.textContent = 'In Fahrenheit:  ' +  (((elInput.value * 1.8) + 32).toFixed(2)) + ' °F';
    return;
  }
})

