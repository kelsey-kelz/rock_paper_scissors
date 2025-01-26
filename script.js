console.log('ROCK PAPER SCISSORS\n');
let humanScore = 0;
let computerScore = 0;

//function to get computer choice
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//function to get human choice
function getHumanChoice() {
  let userChoice = prompt('Rock Paper Scissors SHOOT!');

  userChoice.toLowerCase();
  if (
    userChoice === 'rock' ||
    userChoice === 'paper' ||
    userChoice === 'scissors'
  ) {
    return userChoice;
  } else {
    return 'Invalid choice!';
  }
}

//function that takes human and computer choices,
//plays a single round, and
//increments the round winner's score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie! You both picked the same choice!";
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    ++humanScore;
    return 'You win! Rock beats Scissors.';
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    ++humanScore;
    return 'You Win! Paper beats Rock.';
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    ++humanScore;
    return 'You win! Scissors beats Paper.';
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    ++computerScore;
    return 'You lose! Paper beats Rock.';
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    ++computerScore;
    return 'You lose! Scissors beats Paper.';
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    ++computerScore;
    return 'You lose! Rock beats Scissors.';
  }
}

//function to play the game 5 rounds, keep track of the scores,
//and declare a winner at the end
function playGame() {
  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    console.log('Human: ' + humanSelection);
    const computerSelection = getComputerChoice();
    console.log('Computer: ' + computerSelection);
    console.log(playRound(humanSelection, computerSelection));
    console.log('Human: ' + humanScore + ' Computer: ' + computerScore);
    console.log(' ');
  }

  if (humanScore === computerScore) {
    return "\nIT'S A TIE! GAME OVER.";
  } else if (humanScore > computerScore) {
    return '\nYOU WIN! GAME OVER.';
  } else return '\nTHE COMPUTER WINS! GAME OVER.';
}

console.log(playGame());
