const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height <= 0 || height === '' || isNaN(height)) {
        results.innerHTML = `Please enter the valid height ${height}`;
    } else if (weight <= 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = `Please enter the valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let message;

        if (bmi < 18.6) {
            message = 'You are underweight.';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message = 'You have a normal weight.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            message = 'You are overweight.';
        } else {
            message = 'You are obese.';
        }

        results.innerHTML = `Your BMI is: <span>${bmi}</span>.${message}`;
    }
})