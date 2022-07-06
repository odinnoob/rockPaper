//let playerPlay = prompt("Rock, Paper or Scissors?")
//let playerPlay = "Rock";
let computerScore = 0;
let playerScore = 0;
function computerPlay (){
    randomNum = Math.random();
    if (randomNum < 0.33){
        return "Rock";
        //console.log("Rock");
    } else if (randomNum > 0.66){
        return "Paper"; 
        //console.log("Paper");
    } else {
        return "Scissors";
        //console.log("Scissors");
    }
}
var computerMove = computerPlay();
//console.log(computerMove);


function round1 (x, y){
    if (y === "Rock" && x === "Paper"){
        console.log("You Win! Paper beats rock!");
        playerScore = playerScore + 1;
    } 
    if (y === "Rock" && x === "Rock"){
        console.log("Its a Tie")
    } 
    if (y === "Rock" && x === "Scissors"){
        console.log("You Lose! Rock beats scissors!");
        computerScore = computerScore + 1;
    } 
    if (y === "Paper" && x === "Paper"){
        console.log("Its a Tie")
    } 
    if (y === "Paper" && x === "Rock"){
        console.log("You Lose! Paper beats rock!");
        computerScore = computerScore + 1;
    } 
    if (y === "Paper" && x === "Scissors"){
        console.log("You Win! Scissors beats paper!");
        playerScore = playerScore + 1;
    } 
    if (y === "Scissors" && x === "Scissors"){
        console.log("Its a Tie")
    } 
    if (y === "Scissors" && x === "Rock"){
        console.log("You Win! Rock beats scissors!");
        playerScore = playerScore + 1;
    } 
    if (y === "Scissors" && x === "Paper"){
        console.log("You Lose! Scissors beats paper!");
        computerScore = computerScore + 1;
    } 
 }
// round1(playerPlay, computerMove);

function game (x,y){
    for (let i = 0; i < 5; i++){
        playerPlay = prompt("Rock, Paper or Scissors?");
        computerMove = computerPlay();
        round1(playerPlay, computerMove);
    }
}
game();
let totalScore = playerScore + " - " + computerScore;
console.log(totalScore);
