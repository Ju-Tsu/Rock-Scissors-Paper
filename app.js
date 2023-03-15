const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW!';
const RESULT_PLAYER_WINS = 'Player Wins!';
const RESULT_COMPUTER_WINS = 'Computer Wins!';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pChoice ? RESULT_DRAW :
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WINS
      : RESULT_COMPUTER_WINS;
  //
  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === ROCK)
  // ) {
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game started');
  const playerSelection = getPlayerChoice(); // might be undefined
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You've picked ${playerSelection || DEFAULT_USER_CHOICE}, computer have picked ${computerChoice},`;
  if (winner === RESULT_DRAW) {
    message = message + `therefore you had a DRAW.`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ` you WON!.`;
  } else {
    message = message + ` you LOST!`;
  }
  alert(message);
  gameIsRunning = false;
});

//Not a game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
    for (const num of numbers) {
      if (operation === 'ADD') {
        sum += validateNumber(num);

    } else {
        sum -= validateNumber(num);
    }
  }
    resultHandler(sum, 'The result after adding all numbers is');
  };

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) //Don't use that
//   {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result)
};

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 'lol', -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD',1, 5, 10, -3, 6, 10, 25, 80);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10, 15, 20);
