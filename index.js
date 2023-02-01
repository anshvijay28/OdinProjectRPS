 

function playRound(player) {

    choices = ["Rock", "Paper", "Scissors"]; 
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const computerMessage = "The computer picked: " + computerChoice;
    const playerMessage = "You picked: " + player;
    
    if (computerChoice === "Rock") {
        if (player === "Rock") {
            return [computerMessage, playerMessage, "It's a tie!"];
        }
        else if (player === "Paper") {
            return [computerMessage, playerMessage, "You win!"];
        }
        else {
            return [computerMessage, playerMessage, "You lose!"]
        }
    } 
    else if (computerChoice === "Paper") {
        if (player === "Rock") {
            return [computerMessage, playerMessage, "You lose!"]
        }
        else if (player === "Paper") {
            return [computerMessage, playerMessage, "It's a tie!"]
        }
        else {
            return [computerMessage, playerMessage, "You win!"]
        }
    } 
    else {
        if (player === "Rock") {
            return [computerMessage, playerMessage, "You win!"]
        }
        else if (player === "Paper") {
            return [computerMessage, playerMessage, "You lose!"]
        }
        else {
            return [computerMessage, playerMessage, "It's a tie!"]
        }
    }
}
const userChoices = document.querySelectorAll('button');
const gameMessage = document.querySelectorAll('#message-text, #player-text, #result-text');
userChoices.forEach(button => {
    button.addEventListener('click', e => {
        const messages = playRound(button.innerText);

        gameMessage[0].textContent = messages[0];
        gameMessage[1].textContent = messages[1];
        gameMessage[2].textContent = messages[2];
    })
})
