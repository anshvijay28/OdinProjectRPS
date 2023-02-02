 function playRound(player) {

    choices = ["Rock", "Paper", "Scissors"]; 
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const computerMessage = "The computer picked: " + computerChoice;
    const playerMessage = "You picked: " + player;

    let messages = [computerMessage, playerMessage]
    
    if (computerChoice === "Rock") {
        if (player === "Rock") {
            messages.push("It's a tie!", false);
        }
        else if (player === "Paper") {
            messages.push("You win!", true);
        }
        else {
            messages.push("You lose!", false);
        }
    } 
    else if (computerChoice === "Paper") {
        if (player === "Rock") {
            messages.push("You lose!", false);
        }
        else if (player === "Paper") {
            messages.push("It's a tie!", false);
        }
        else {
            messages.push("You win!", true);
        }
    } 
    else {
        if (player === "Rock") {
            messages.push("You win!", true);
        }
        else if (player === "Paper") {
            messages.push("You lose!", false);
        }
        else {
            messages.push("It's a tie!", false);
        }
    }
    return messages;
}
const userChoices = document.querySelectorAll('button');
const gameMessage = document.querySelectorAll('#message-text, #player-text, #result-text');
const score = document.querySelector('#score-text');

userChoices.forEach(button => {
    button.addEventListener('click', e => {
        const messages = playRound(button.innerText);
        gameMessage[0].textContent = messages[0];
        gameMessage[1].textContent = messages[1];
        gameMessage[2].textContent = messages[2];
        if (messages[3]) {
            score.innerText++;
        }
    })
})
