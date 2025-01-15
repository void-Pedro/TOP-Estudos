let playerScore = 0;
let computerScore = 0;
let blocked = false;

const emojiComp = document.querySelector(".comp");
const gameResult = document.querySelector(".gameresult");
const placarAtual = document.querySelector(".atual");

function getComputerChoice() {
  i = Math.floor(Math.random() * 3)
  if (i == 0) {
      return "Rock";
  } else if (i == 1) {
      return "Paper";
  } else {
      return "Scissors";
  }
}

function atualizaPlacar() {
  placarAtual.innerHTML = playerScore + " x " + computerScore;
}

function atualizaTexto(computerSelection, resultado) {
  gameResult.innerHTML = "O computador joga " + computerSelection + ". " + resultado;
}

function clickEmoji(playerSelection) {
  let texto = "";
  let computerSelection = getComputerChoice();
  if(blocked != true) {
    if (playerSelection === computerSelection) {
      computerScore++;
      playerScore++;
      texto = "É um empate!";
    }
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
      playerScore++;
      texto = 'O player ganhou o round!';
    }
    if (
      (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
      computerScore++;
      texto = 'O computador ganhou o round!';
    }
  }
  if((playerScore == 5) || (computerScore == 5)) {
    blocked = true;
    if(playerScore == 5) {
      let vencedor = "player"
    } else {
      vencedor = "computador"
    }
    gameResult.innerHTML += "<br>O " + vencedor + " vence o jogo!!";
  } else {
    atualizaPlacar();
    atualizaTexto(computerSelection, texto);
  }
  
}
