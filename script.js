function computerPlay(){ //Returns rock, paper or scissors; Rand
    let computerSelection, gener;
    gener=Math.floor(Math.random()*3);
    switch(gener){
        case 0:
            computerSelection="rock";
            break;
        case 1:
            computerSelection="paper";
            break;
        case 2:
            computerSelection="scissors"
            break;
    }
    return computerSelection;
}

function playGame(playerSelection/*non casesensitive*/, computerSelection){ //Returns (ex.)"You lose! X beats Y"
    //let draw, playerWin, playerLose;
    switch(playerSelection){
        case "rock":
            if(computerSelection==="rock") return "That's a draw!";
            if(computerSelection==="paper") return "You lose! "+computerSelection+" beats "+playerSelection;
            if(computerSelection==="scissors") return "You win! "+playerSelection+" beats "+computerSelection;
        case "paper":
            if(computerSelection==="paper") return "That's a draw!";
            if(computerSelection==="scissors") return "You lose! "+computerSelection+" beats "+playerSelection;
            if(computerSelection==="rock") return "You win! "+playerSelection+" beats "+computerSelection;
        case "scissors":
            if(computerSelection==="scissors") return "That's a draw!";
            if(computerSelection==="rock") return "You lose! "+computerSelection+" beats "+playerSelection;
            if(computerSelection==="paper") return "You win! "+playerSelection+" beats "+computerSelection;
    }
}

function game(){
    let playerScore=0, computerScore=0, drawCount=0, gameScore;
    let playerSelection="scissors";
    for(let i=0; i<5; i++){
        gameScore=playGame(computerPlay(), playerSelection);
        console.log(gameScore);
        if((gameScore.charAt(4))==='l') computerScore++;
        else if((gameScore.charAt(4))==='w') playerScore++;
        else drawCount++;
    }
    if(playerScore>computerScore) console.log("Player wins!");
    else if(playerScore<computerScore) console.log("Computer wins!");
    else console.log("Fair game");
}

game();
//TO DO: add user input, non case sensitive. Use prompt() for the input

/*let playerSelection="paper";
console.log("player selection: "+playerSelection);
console.log(playGame(computerPlay(), playerSelection));*/