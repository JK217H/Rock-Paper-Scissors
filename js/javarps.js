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
 
    function playGame () {
        let scorePlayer = 0;
        let scoreComputer = 0;
        for (i = 0; i < 5; i++)
        {
        
         let computerSelection= getComputerChoice();  
         let playerSelection = getPlayerChoice();
    
    //compare rock and paper 
    if (playerSelection === "rock" && computerSelection ==="Scissors"){
        scorePlayer++;
        console.log("You won! Rock beats Scissors!");
    }
    else if (playerSelection ==="scissors" && computerSelection ==="Paper") {
        scorePlayer++;
        console.log("You won! Scissors beats Paper!");
    }
    else if (playerSelection ==="paper" && computerSelection ==="Rock") {
        scorePlayer++;
        console.log("You won! Paper beats Rock!");
    }
    else if (computerSelection === "Rock" && playerSelection ==="scissors") {
        scoreComputer++;
        console.log("You lost! Rock beats Scissors!");
    }
    else if (computerSelection === "Scissors" && playerSelection ==="paper") {
        scoreComputer++;
        console.log("You lost! Scissors beats Paper!");
    }
    else if (computerSelection === "Paper" && playerSelection ==="rock") {
        scoreComputer++;
        console.log("You lost! Paper beats Rock!");
    }
     else if (computerSelection.toLowerCase() === playerSelection)
     {
       console.log("Draw, you both chose" + " " +computerSelection +"!");
    }
    console.log("Your score:" +" " + scorePlayer);
    console.log("Computer score:" + " " + scoreComputer);
}
    //compare scissors and rock
    //compare paper and scissors
}