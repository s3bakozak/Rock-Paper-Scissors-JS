//console.log('hi');
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('error');
    };
  };
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    };
  };
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'User Won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'User Won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'User Won!';
      }
    }
  };
  
  function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();