function getComputerChoice() {
    let randNum = Math.floor(Math.random() *100);
    if (randNum <= 33)
    {
        let computerSelection = "Rock";
        return computerSelection; 
    }
    else if (randNum > 33 && randNum <= 66)
    {
        let computerSelection  = "Paper";
        return computerSelection; 
    }
    else 
    {
        let computerSelection  = "Scissors";
        return computerSelection; 
    }
    }

    //get player selection
    function getPlayerChoice () {
       let playerSelection = prompt("What do you choose?");
       if (playerSelection.toLowerCase() === "rock") {
        
        return playerSelection.toLowerCase() ;
       }
       else if (playerSelection.toLowerCase()  === "paper"){
        
        return playerSelection.toLowerCase() ;
       }
       else if (playerSelection.toLowerCase()  === "scissors") {
        
        return playerSelection.toLowerCase() ;
       }
       else {
        console.log ("Invalid Choice");
        return false;
       }
    }
    //  execute computerSelection
    //declare function 
    let scorePlayer = 0;
        let scoreComputer = 0;
    function playRound () {
     
      
         let computerSelection= getComputerChoice();  
         let playerSelection = getPlayerChoice();
    
    //compare rock and paper 
    if (playerSelection === "rock" && computerSelection ==="Scissors"){
        scorePlayer++;
        return "You won! Rock beats Scissors!"+ "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    else if (playerSelection ==="scissors" && computerSelection ==="Paper") {
        scorePlayer++;
        return "You won! Scissors beats Paper!"+ "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    else if (playerSelection ==="paper" && computerSelection ==="Rock") {
        scorePlayer++;
        return "You won! Paper beats Rock!"+ "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    else if (computerSelection === "Rock" && playerSelection ==="scissors") {
        scoreComputer++;
        return "You lost! Rock beats Scissors!" + "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    else if (computerSelection === "Scissors" && playerSelection ==="paper") {
        scoreComputer++;
        return "You lost! Scissors beats Paper!" + "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    else if (computerSelection === "Paper" && playerSelection ==="rock") {
        scoreComputer++;
        return "You lost! Paper beats Rock!" + "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
      
    }
     else if (computerSelection.toLowerCase() === playerSelection)
     {
        return "Draw, you both chose" + " " +computerSelection +"!" + "\n Your Score:" + scorePlayer + "\n Computer Score:" + scoreComputer;
    }
    
}//compare scissors and rock
    //compare paper and scissors


function game (){
    scorePlayer = 0;
    scoreComputer = 0;
    for (i = 0; i < 5; i++)
    {
        let result = playRound();
        console.log(result);
    }
if (scorePlayer > scoreComputer){
console.log("Good Job, you won!");
}
else if (scoreComputer > scorePlayer){
console.log("Man... you lost!");
}
else {
console.log("It's a ..... DRAW!")
}
}