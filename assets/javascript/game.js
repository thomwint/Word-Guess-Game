//Var to hold words for guessing
var wordGuess = ["eclair", "flan", "ladyfingers", "truffle", "shortcake"];
//variables
var numberTries = 15;
var userLetters = [];
var currentWordIndex;
var userGuessingWord = [];
var remainingGuesses = 0;
var gameEnded = false;
var wins = 0;

function resetGame() {
    remainingGuesses = numberTries;

    currentWordIndex = Math.floor(Math.random() * (wordGuess.length));

    userLetters = [];
    userGuessingWord = [];

    for (var i = 0; i < wordGuess[currentWordIndex].length; i++) {
        userGuessingWord.push("_");
    }
    updateDisplay();
};

function updateDisplay() {
    document.getElementById("userWins").innertext = wins;
    
    var userGuessingWordText = "";

    for (var i = 0; i < userGuessingWord.length; i++) {
        userGuessingWordText += userGuessingWord[i];
    }
    document.getElementById("gameWord").innerText = userGuessingWordText;
    document.getElementById("guessRemain").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = userLetters;
    document.getElementById("userWins").innerText = wins;
};

function userGuess(letter) { 
    if (remainingGuesses > 0) {
        if (userLetters.indexOf(letter) === -1) {
            userLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};

function evaluateGuess(letter) {
    var positions = [];
    for (var i = 0; i < wordGuess[currentWordIndex].length; i++) {
        if (wordGuess[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            userGuessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if (userGuessingWord.indexOf("_") === -1) {
        wins++;
        gameEnded = true;
    }
};

function checkLoss()
{
    if(remainingGuesses <= 0) {
       gameEnded = true;
    }
}

document.onkeydown = function(event) {
    if (gameEnded) {
        resetGame();
        gameEnded = false;
    }
    else { 
        if (event.keyCode >= 65 && event.keyCode <= 90) {
        userGuess(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
}
};