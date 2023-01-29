let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    let randNum = Math.floor(Math.random()* 10);
     return randNum;
}

function compareGuesses(human, computer,randNum ) {
    if(Math.abs(human - randNum) < Math.abs(computer - randNum)) {
        return true
    } else if (Math.abs(human - randNum) > Math.abs(computer - randNum)){
        return false
    } else {
        return "It's a tie";
    }
}

const updateScore = winner => {
    if (false) {
        return computerScore++
     } else {
        return humanScore++
     }
}

const advanceRound = () => {
    return currentRoundNumber++;
}