
/* 
   Welcome to the Higher-Lower Game Project. 

   Try out the following functions that are 
   available to you (you can just call them
   in code or the console):
   
  // Returns the current value the user has 
  // entered into the guess input box.
  function getGuessInput()

  // Sets the current value  entered into the 
  // guess input box to 'value'.
  function setGuessInput(value)
 
  // Hides all messages shown to the user within
  // the "message-container" element.
  function hideAllMessages()

  // Hides all messages and then shows the one
  // with with the id attribute matching 'id' 
  // parameter.
  // Example: showMessage("higher-message")
  function showMessage(id)

  // Shows the remaining guess count.
  function showRemainingGuesses(value)
*/

// Initialize global variables needed by the program.
let magicNumber = -1;
let remainingGuesses = -1;


/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/* This function sets up a new game when called. 
   Here are the steps:

     (1) Generate a magic number stored in 'magicNumber'.
     (2) Reset the remaining guess count.
     (3) Show the new guess count.
     (4) Hide any messages.

*/
function setupNewGame() {
  magicNumber = getRandomIntInclusive(1, 100);
  console.log(magicNumber)
  remainingGuesses = 5;
  showRemainingGuesses(remainingGuesses);
  hideAllMessages();
  console.log(magicNumber);
}

// Handles when the user makes a new guess.
function handleGuess() {
  // Check if remaining guesses is -1 and setup a new game if so.
  // Check if the user has any remaining guesses and return if not.
  if (remainingGuesses === -1) {
    setupNewGame();
  } else if (remainingGuesses === 0) {
    return;
  }
  
  // Retreive the user's newest guess.
  getGuessInput();

  // Check if the user has won. We should show a message, set remaining guesses to 0, and return from this function.
  // Check if the guess is higher or lower and show appropriate message.
  if (getGuessInput() === magicNumber) {
    showMessage("win-message");
    remainingGuesses = 0;
    return;
  } else if (getGuessInput() > magicNumber) {
    showMessage("lower-message");
  } else if (getGuessInput() < magicNumber) {
    showMessage("higher-message");
  }
  
  // The user has used a guess, decrement remainin guesses and show the new value.
  remainingGuesses--;
  showRemainingGuesses(remainingGuesses);
  // If the remaining guesses is 0, then the user has lost and that message should be shown.
  if (remainingGuesses === 0) {
    showMessage("lose-message");
    alert("Good effort! The answer was actually " + magicNumber + ".");
  }
}


/* Function to be called when the user wants to play again.

   Here are the steps:

      (1) Setup a new game.
      (2) Set the guess input to "".

*/
function handlePlayAgain() {
  setupNewGame();
  setGuessInput("");
}
