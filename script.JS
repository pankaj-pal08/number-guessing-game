let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    let guess = Number(input.value);

    if (input.value === "" || guess < 1 || guess > 100) {
        message.innerText = "Enter number between 1 and 100!";
        return;
    }

    attempts++;

    if (guess > secretNumber) {
        message.innerText = "Too High! Try Again.";
    } else if (guess < secretNumber) {
        message.innerText = "Too Low! Try Again.";
    } else {
        message.innerText = "🎉 Congratulations! You Won!";
    }

    attemptsText.innerText = "Attempts: " + attempts;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").innerText = "New Game Started!";
    document.getElementById("attempts").innerText = "Attempts: 0";
}