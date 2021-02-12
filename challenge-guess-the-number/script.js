const randomNumberGenerator = function () {
  return Math.floor(Math.random() * 100 + 1);
};

let randomNumber = randomNumberGenerator();
let inputVar = document.querySelector(".inputs-Values");
let guessBtn = document.querySelector("btnGuess")
let triesVar = document.querySelector(".Tries-output");
let newBtn = document.querySelector(".btnNewGame");

let output = document.querySelector(".final-output");
console.log(randomNumber);

let triVal = 7;
triesVar.value = `Number of Tries: ${triVal}`;

// console.log(randomNumber);
function guessNumber() {
  if (triVal <= 7 && triVal > 1) {
    //Collect input from the user
    let guess = +document.querySelector(".inputs-Values").value;

    //If the user inputs a bad input ie 0, empty string, number greater that 100, 
    //number less than zero Print "Please enter a number between 1 and 100"
    if (guess === 0 || guess === "" || guess > 100 || guess < 0) {
      console.log("please enter number btw 1 and 100");
      output.value = "Please enter number btw 1 and 100";
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      inputVar.value = "";
      //If the users guess is higher than the random number print Number is too high, 
      //try again (hint use .final-out class to print)
    } else if (guess > randomNumber) {
      output.value = "Number is too high";
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      inputVar.value = "";

      //If the users guess is lower than the random number print Number is too low, 
      //try again  (hint use .final-out class to print)
    } else if (guess < randomNumber) {
      output.value = "Number is too low";
      triVal--;
      triesVar.value = `Number of Tries: ${triVal}`;
      inputVar.value = "";

      //If the user has guessed the random number correctly print out the randomNumber with 
      //a message "Guess is correct. You win!"
    } else {
      document.querySelector(".btnGuess").removeEventListener("click", guessNumber);
      document.removeEventListener("keypress", keyBoardEvents);
      output.value = "You Win";
    }
  } else {
    document.querySelector(".btnGuess").removeEventListener("click", guessNumber);
    document.removeEventListener("keypress", keyBoardEvents);
    output.value = "You Lost";
    triVal--;
    triesVar.value = `Number of Tries: ${triVal}`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user

  inputVar.value = "";
  triVal = 7;
  triesVar.value = `Number of Tries: ${triVal}`;
  output.value = "Please enter number btw 1 and 100"
  randomNumber = randomNumberGenerator();
  document.querySelector(".btnGuess").addEventListener("click", guessNumber);
  document.addEventListener("keypress", keyBoardEvents);
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
newBtn.addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);