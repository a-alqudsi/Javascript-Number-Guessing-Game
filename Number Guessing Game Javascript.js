var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = parseInt(prompt("Guess a number between 1 and 10"));

while (guess !== randomNumber) {
  if (guess < randomNumber) {
    alert("Too low. Guess again.");
  } else {
    alert("Too high. Guess again.");
  }
  guess = parseInt(prompt("Guess a number between 1 and 10"));
}
alert("You guessed the number!");