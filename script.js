let guesses = [];
let correctNumber = getRandomNumber();

// console.log(correctNumber); *For debugging

window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame)
  domEvents();
}

function domEvents() {
  for(let i = 0; i < document.body.children.length; i++) {
    alert(document.body.children[i].innerText);
  }
}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}


/**
 * Show the result for if the guess it too high, too low, or correct
 */
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame() {
  guesses = [];
  correctNumber = getRandomNumber();
  // console.log(correctNumber); *For debugging
  resetResultContent();
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber() {
  let correctNumber = Math.floor(Math.random() * 100) + 1;
  return correctNumber;
}

/**
 * Save guess history
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
}

/**
 * Display guess history to user
 */
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index > -1) {
    list += "<li class='list-group-item'>You guessed " + guesses[index] + "</li>";
    index--;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
