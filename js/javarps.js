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
    //  execute computerSelection
    //declare function 
    //compare rock and paper 
    //compare scissors and rock
    //compare paper and scissors