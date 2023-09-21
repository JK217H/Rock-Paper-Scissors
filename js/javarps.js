function getComputerChoice() {
    let randNum = Math.floor(Math.random() *100);
    if (randNum <= 33)
    {
        const computerSelection = "Rock";
        return computerSelection; 
    }
    else if (randNum > 33 && randNum <= 66)
    {
        const computerSelection  = "Paper";
        return computerSelection; 
    }
    else 
    {
        const computerSelection  = "Scissors";
        return computerSelection; 
    }
    }

    //get player selection
    function getPlayerChoice () {
       let playerSelection = prompt("What do you choose?");
       if (playerSelection === "Rock") {
        playerSelection = "Rock";
        return playerSelection;
       }
       else if (playerSelection === "Paper"){
        playerSelection = "Paper";
        return playerSelection;
       }
       else if (playerSelection === "Scissors") {
        playerSelection = "Scissors"
        return playerSelection;
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
    function playGame () {
        
         let computerSelection= getComputerChoice();  
         let playerSelection = getPlayerChoice();
    
    //compare rock and paper 
    if (playerSelection === "Rock" && computerSelection ==="Scissors"){
        scorePlayer++;
        console.log("You won! Rock beats Scissors!");
    }
    else if (playerSelection ==="Scissors" && computerSelection ==="Paper") {
        scorePlayer++;
        console.log("You won! Scissors beats Paper!");
    }
    else if (playerSelection ==="Paper" && computerSelection ==="Rock") {
        scorePlayer++;
        console.log("You won! Paper beats Rock!");
    }
    else if (computerSelection === "Rock" && playerSelection ==="Scissors") {
        scoreComputer++;
        console.log("You lost! Rock beats Scissors!");
    }
    else if (computerSelection === "Scissors" && playerSelection ==="Paper") {
        scoreComputer++;
        console.log("You lost! Scissors beats Paper!");
    }
    else if (computerSelection === "Paper" && playerSelection ==="Rock") {
        scoreComputer++;p
        console.log("You lost! Paper beats Rock!");
    }
     else if (computerSelection == playerSelection)
     {
       console.log("Draw, you both chose" + playerSelection +"!");
    }
    console.log("Your score:" + scorePlayer);
    console.log("Computer score: " + scoreComputer);
    console.log(computerSelection);
    //compare scissors and rock
    //compare paper and scissors
}