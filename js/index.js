$(function () {
  $(".before-after-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.7 });

});

const sliderHeight = document.querySelector("#height");
const sliderWeight = document.querySelector("#weight");
let currentHeight = document.querySelector("#height-value");
let currentWeight = document.querySelector("#weight-value");
currentHeight.innerHTML = "Your height is " + sliderHeight.value + " cm";
currentWeight.innerHTML = "Your weight is " + sliderWeight.value + " kg";

sliderHeight.oninput = function () {
  currentHeight.innerHTML = "Your height is " + this.value + " cm";
}
sliderWeight.oninput = function () {
  currentWeight.innerHTML = "Your weight is " + this.value + " kg";
}
let result = document.getElementById("bmi");
let bmIndex;

document.querySelector('.calculate-bmi').addEventListener('click', calcBMI);
function calcBMI() {
  bmIndex = (sliderWeight.value / Math.pow(sliderHeight.value / 100, 2)).toFixed(2);
  if (bmIndex < 18.5) result.innerHTML = "Your BMI is " + `<strong> ${bmIndex} </strong>` + ", you are underweight";
  else if (bmIndex < 25) result.innerHTML = "Your BMI is " + `<strong> ${bmIndex} </strong>` + ", your weight is normal";
  else if (bmIndex < 29.9) result.innerHTML = "Your BMI is " + `<strong> ${bmIndex} </strong>` + ", you are overweight";
  else result.innerHTML = "Your BMI is " + `<strong> ${bmIndex} </strong>` + ", you are obese";
};

document.querySelector('.calculate-diet').addEventListener('click', calcDiet);
function calcDiet() {
  const age = document.querySelector('#age');
  const radios = document.querySelectorAll('input[name="gender"]');
  let gender;
  const activities = {
    no: 1.2,
    lite: 1.375,
    normal: 1.55,
    heavy: 1.725
  };
  const activity = document.querySelector('#activity');
  let coefficient = activities[activity.value];
  const diet = document.querySelector('#diet');
  let result;
  for (const radio of radios) {
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }
  if (age.value == 0 || age.value < 0) {
    alert("please input your age");
    return;
  }
  if (gender === undefined) {
    alert("please choose your gender");
    return;
  }
  if (gender === "female") result = ((10 * sliderWeight.value + 6.25 * sliderHeight.value - 5 * age.value - 161) * coefficient).toFixed(0);
  else result = ((10 * sliderWeight.value + 6.25 * sliderHeight.value - 5 * age.value + 5) * coefficient).toFixed(0);
  diet.innerHTML = "Your proper amount of calories is " + `<strong> ${result} </strong>` + " kcal/day";


};

document.getElementById("order149").addEventListener('click', addOrder);
function addOrder() {
  const text = document.getElementById("area");
  text.value = 'I have chosen a 149$ "Light" training plan, can you call me back?';


}

// Для женщин: (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст     в годах) − 161
// Для мужчин: (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5

