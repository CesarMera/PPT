// variables generales
var myArray = ["Rock", "Paper", "Scissors"];

var rand ="";

function getComputerChoice(){
    rand = myArray[(Math.random() * myArray.length) | 0];
    return rand;
}

// variables declaradas
var playerWins = 0;
var computerWins = 0;
var wins = 5;
var round = 0;
var ties = 0;

// funcion de trabajo
function playRound (playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        ties++;
        alert("Game Tie");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerWins++;
        alert("You lose! Paper beats Rock");   
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerWins++;
        alert ("You WIN! Scissors beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerWins++;
        alert("You los! Scisors beats Paper");
    } else if ( playerSelection == "paper" && computerSelection == "rock"){
        playerWins++;
        alert ("You WIN! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerWins++;
        alert("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerWins++;
        alert ("You WIN! Scissors beats Paper");
    }
};