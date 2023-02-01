choices = ["Rock", "Paper", "Scissors"]; 
const computerChoice = () => choices[Math.floor(Math.random() * 3)]; 
const playerChoice = () => capitalize(prompt("Enter your choice: "));

function capitalize(string) {
    string = string.trim();
    const firstLetter = string.charAt(0);
    const theRest = string.slice(1);
    return firstLetter.toUpperCase() + theRest.toLowerCase();
}

function playRound() {
    const computer = computerChoice();
    const player = playerChoice();
    const message = "The computer picked: " + computer + ". You picked: " + player + ". ";
    if (!choices.includes(player)) {
        return "Please enter a valid choice.";
    }
    if (computer === "Rock") {
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
    else if (computer === "Paper") {
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
for (let i = 0; i < 5; i++) {
    console.log(playRound());
}
