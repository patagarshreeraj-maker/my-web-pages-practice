let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
function checkGuess() {
    let randomNumber = Math.ceil(Math.random() * 100);
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You guessed the right number.";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low! Try again.";
        gameResult.style.backgroundColor = "lightblue";
    } else {
        gameResult.textContent = "Too high! Try again.";
        gameResult.style.backgroundColor = "lightcoral";
    }
}