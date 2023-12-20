// variables generales
var myArray = ['Piedra', 'Papel', 'Tijeras'];

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
        alert("Empate...!");
    } else if (playerSelection == 'piedra' && computerSelection == 'papel'){
        computerWins++;
        alert("Perdiste, papel gana a piedra");   
    } else if (playerSelection == 'piedra' && computerSelection == 'tijeras'){
        playerWins++;
        alert ("Ganaste...!, piedra le gana a tijeras ");
    } else if (playerSelection == 'papel' && computerSelection == 'tijeras'){
        computerWins++;
        alert("Perdiste, tijeras le gana a papel");
    } else if ( playerSelection == 'papel' && computerSelection == 'piedra'){
        playerWins++;
        alert ("Ganaste....! papel vence a piedra");
    } else if (playerSelection == 'tijeras' && computerSelection == 'piedra'){
        computerWins++;
        alert("Perdiste, piedra le gana a tijeras");
    } else if (playerSelection == 'tijeras' && computerSelection == 'papel'){
        playerWins++;
        alert ("Ganaste...! tijeras le gana a piedra");
    }
};

// Funcion Game
function game(){
    for (let i = 0; i < 5; i++){

        var computerSelection = getComputerChoice();
        var playerSelection = prompt ("Elije: 'Piedra', 'Papel' o 'Tijeras' ");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection == " "){ // para ver como cuenta
            alert ("Deberias escribir Piedra, Papel o Tijera ");
        }else{
            playRound(playerSelection, computerSelection);
            round++;
            console.log("Esta es la ronda numero: " + round);
        }
    }

    if (playerWins > computerWins){
        alert("GANASTE....!");
    } else if (playerWins < computerWins){
        alert("Te ganó la computadora");
    } else if(playerWins == computerWins){
        alert("Empate");
    }
    alert(" Player Wins: " + playerWins + ", Computer Wins: " + computerWins + ", Games Ties: " + ties)
}

game();