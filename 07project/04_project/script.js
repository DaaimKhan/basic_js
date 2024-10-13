let randomNumber = parseInt(Math.random() * 100 + 1); // here we use parseInt to remove the decimal

const submitbutton = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.loworHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitbutton.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter the valid number');
    } else if (guess < 1) {
        alert('Please enter the number more than 1');
    } else if (guess > 100) {
        alert('Please enter the number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage(`You guessed it right`);
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) { // here we empty the value to get the new value
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add(`button`)
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled', '');
        resultParas.removeChild(p);
        playGame = true
    })
}