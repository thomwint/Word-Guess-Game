//Choose Theme
//use key events for letter choosen by user
/* 
Display on html page:
1 - Press any key to get started.
2 - Wins - # of times user guessed word correctly
    Start the first word with _ _ _ _ based on number of letters
    as user guesses a letter, reveal spot where letter is
3 - Display number of guesses remaining
4 - Display the letters choosen
5 - after user wins/loses - repeat with next word and make player play again
*/

/* 
Psuedo Code:
Html :
    current word
     _ _ _ _ _ - on document load?
CSS : design
JS :
array - words in game
When user selects a key
    add to number of guesses
    replace _ if letter is there
    add letter to selected list
        make sure repeat guesses do not affect html
Repeat until word is complete OR remaining guesses = 0
    Then start new word
    Repeat
*/