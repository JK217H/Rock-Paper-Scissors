function getComputerChoice() {
    const randNum = Math.floor(Math.random() *100);
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
        return playerSelection;
       }
       else if (playerSelection === "Paper"){
        return playerSelection;
       }
       else if (playerSelection === "Scissors") {
        return playerSelection;
       }
       else {
        console.log ("Invalid Choice");
        return false;
       }
    }
    //  execute computerSelection
    getComputerChoice();
    //declare function 
    function playGame (playerSelection, computerSelection) {
        let scorePlayer = 0;
        let scoreComputer = 0;
    
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
    //compare scissors and rock
    //compare paper and scissors
}