 const getUserChoice = userInput => {
userInput = userInput.toLowerCase();

if (userInput === 'rock' || 'paper' ||'scissors'||'bomb') {
  return userInput;
} else {
  console.log('Error message: Your input is invalid');
}
};

const getComputerChoice = ()=> {
 let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  default:
  return 'scissors';
  break;}
}
const determineWinner= (userChoice,computerChoice)=>{
  if (userChoice === computerChoice){
    return "The game was tie";
  };

  if (userChoice==='rock'){
      if (computerChoice==='paper'){
        return 'The computer won!';
  }   else {
       return 'You won!';
  }
};

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'You won!';
  } else {
    return 'The computer won!';
  }
};

if (userChoice==='bomb'){
  return "you win the game"
}
};
  

const playGame = InputEnteredByUser => {
   const userChoice = getUserChoice(InputEnteredByUser);
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);

   console.log('************************************************');
   console.log(determineWinner(userChoice, computerChoice));
};

playGame('rock');
