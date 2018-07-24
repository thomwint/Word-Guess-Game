//Variables:
//array of words to guess.
var wordGuess = ["eclair", "flan", "ladyfingers", "truffle", "shortcake"];
//number of user guesses.
var numberTries = 15;
//empty array to set user letter guesses in.
var userLetters = [];
// use to find index of word being guessed.
var currentWordIndex;
//empty array for the word being guessed.
var userGuessingWord = [];
//counter for remaing guesses.
var remainingGuesses = 0;
//variable for ending the game/restarting new game.
var gameEnded = false;
//counter for counting wins.
var wins = 0;

//Game functions:
//user presses key - if dame is over, reset.
document.onkeydown = function(event) {
    if (gameEnded) {
        resetGame();
        gameEnded = false;
    }
//else, take in letter, check for wins/loss.
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
        userGuess(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
}
};
//takes user letter and pushes to the users letters guessed array then
//evaluates the letter.
function userGuess(letter) {
    if (remainingGuesses > 0) {
        if (userLetters.indexOf(letter) === -1) {
            userLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};
//takes user letter guess and if in the guessing word array, push to
//the html doc as the missing letter.
function evaluateGuess(letter) {
    var currentIndex = [];
    for (var i = 0; i < wordGuess[currentWordIndex].length; i++) {
        if (wordGuess[currentWordIndex][i] === letter) {
            currentIndex.push(i);
        }
    }
    if (currentIndex.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < currentIndex.length; i++) {
            userGuessingWord[currentIndex[i]] = letter;
        }
    }
};
//resets the game
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
//function to update the html page.
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
//check for wins.
function checkWin() {
    if (userGuessingWord.indexOf("_") === -1) {
        wins++;
        gameEnded = true;
    }
};
//checks for a loss.
function checkLoss() {
    if(remainingGuesses <= 0) {
       gameEnded = true;
    }
};
