const randomNumber = parseInt(Math.random() * 100 + 1); // here we use parseInt to remove the decimal

const submitbutton = document.querySelector('#submit');
const guessField = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.loworHi');
const resultParas = document.querySelector('.resultParas');
