const height = document.querySelector('#myRange');
const outHeight = document.querySelector('.height');
const weight = document.querySelector('.weight');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const outBmi = document.querySelector('.bmi');
const msg = document.querySelector('.message');


let btn = document.querySelector('button');
btn.addEventListener('click', bmiCalculator);
console.log(weight.value);

height.addEventListener('change', () => {
    outHeight.innerHTML = height.value;
    console.log(height.value);
});

weight.addEventListener('change', () => {
    weight.innerHTML = weight.value;
    console.log(weight.value);
})

plus.addEventListener('click', () => {
    let result = weight.value++;
    weight.innerHTML = weight.value;
    console.log(weight.value);
});
minus.addEventListener('click', () => {
    let result = weight.value--;
    weight.innerHTML = weight.value;
    console.log(weight.value);
});



function bmiCalculator() {
    let w = weight.value;
    let h = height.value / 100;
    bmi = w / (h ** 2);
    bmi = bmi.toFixed(2);
    bmi = Number(bmi);
    outBmi.innerHTML = `Your BMI is </br> ${bmi}`;
    console.log(bmi);
    if (bmi < 18.5) {
        msg.innerHTML = "You are underweight."
        msg.style.color = 'yellow';
    } else if (bmi >= 18.5 && bmi < 25) {
        msg.innerHTML = "You are healthy."
        msg.style.color = 'green';

    } else if (bmi >= 25) {
        msg.innerHTML = "You are overweight."
        msg.style.color = 'red';
    };
}