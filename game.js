// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

let chancesLeft = 3;

function checkGuess() {
  const guessInput = document.getElementById("guessInput").value;
  const feedback = document.getElementById("feedback");
  const chancesDisplay = document.getElementById("chances");
  const retryButton = document.getElementById("retryButton");

  // Validate user input
  const userGuess = parseInt(guessInput);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    feedback.innerText = "Please enter a valid number between 1 and 10.";
    return;
  }

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    feedback.innerText = "Congratulations! You guessed the correct number.";
    retryButton.disabled = false;
  } else {
    // Provide feedback on whether the correct number is higher or lower
    chancesLeft--;
    chancesDisplay.innerText = chancesLeft;
    if (chancesLeft === 0) {
      feedback.innerText = `Sorry, you're out of chances. The correct number was ${secretNumber}.`;
      retryButton.disabled = false;
    } else {
      const hint = userGuess < secretNumber ? "higher" : "lower";
      feedback.innerText = `Incorrect. Try again! The correct number is ${hint}.`;
    }
  }
}

function resetGame() {
  const guessInput = document.getElementById("guessInput");
  const feedback = document.getElementById("feedback");
  const chancesDisplay = document.getElementById("chances");
  const retryButton = document.getElementById("retryButton");

  // Generate a new random number
  secretNumber = Math.floor(Math.random() * 10) + 1;

  // Reset game variables
  chancesLeft = 3;
  guessInput.value = "";
  feedback.innerText = "";
  chancesDisplay.innerText = chancesLeft;
  retryButton.disabled = true;
}
