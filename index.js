 

function playRound(player) {

    choices = ["Rock", "Paper", "Scissors"]; 
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const message = "The computer picked: " + computerChoice + ". You picked: " + player + ". ";
    if (!choices.includes(player)) {
        return "Please enter a valid choice.";
    }
    if (computerChoice === "Rock") {
        if (player === "Rock") {
            return message + "It's a tie!";
        }
        else if (player === "Paper") {
            return message + "You win!";
        }
        else {
            return message + "You lose.";
        }
    } 
    else if (computerChoice === "Paper") {
        if (player === "Rock") {
            return message + "You lose.";
        }
        else if (player === "Paper") {
            return message + "It's a tie!";
        }
        else {
            return message + "You win!";
        }
    } 
    else {
        if (player === "Rock") {
            return message + "You win!";
        }
        else if (player === "Paper") {
            return message + "You lose.";
        }
        else {
            return message + "It's a tie!";

        }
    }
}

const userChoices = document.querySelectorAll('button');
userChoices.forEach(button => {
    button.addEventListener('click', e => {
        console.log(playRound(button.innerText));
    })
})