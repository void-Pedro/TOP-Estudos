let playerScore = 0
let computerScore = 0
let roundWinner = ''

const playerSelection = "Rock";

function getComputerChoice() {
    i = Math.floor(Math.random() * 3)
    if (i == 0) {
        return "Rock";
    } else if (i == 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
  }

function game() {
    while (playerScore < 5 && computerScore < 5) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(roundWinner)
    }
    if (playerScore == 5) {
        console.log("Player Wins!!")
    } else {
        console.log("Computer Wins!!")
    }
    
}

game()