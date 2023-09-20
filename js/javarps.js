function getComputerChoice() {
    const randNum = Math.floor(Math.random() *100);
    if (randNum <= 33)
    {
        const compChoice = "Rock";
        return compChoice; 
    }
    else if (randNum > 33 && randNum <= 66)
    {
        const compChoice = "Paper";
        return compChoice; 
    }
    else 
    {
        const compChoice = "Scissors";
        return compChoice; 
    }
    }

    