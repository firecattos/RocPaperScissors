let playerScore=0, computerScore=0, drawCount=0, gameScore, playerSelection=null;

const playerChoice=document.querySelector('.playerChoice');
const computerChoice=document.querySelector('.computerChoice');
const roundPlay=document.querySelector('.round');
const roundResult=document.querySelector('.roundResult');
const gameResult=document.querySelector('.finalResult');
const playAgain=document.querySelector('.playAgain');

const btnChoice=document.querySelectorAll('.buttonContainer>button'); //Listen for input
btnChoice.forEach((button)=>{
    button.addEventListener('click', userInput); 
});

playAgain.addEventListener('click', ()=>{ //Reload the page
    window.location.reload(true);
});

function computerPlay(){ //Returns rock, paper or scissors as computer choice;
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

function playGame(playerSelection, computerSelection){ //Returns (ex.)"You lose! X beats Y"
    computerChoice.textContent="Computer choice: "+computerSelection;
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

function game(playerSelection){
        if(playerSelection==="rock" || playerSelection==="paper" || playerSelection==="scissors"){ //Take user input and check if it's a valid input
            gameScore=playGame(playerSelection, computerPlay());
            roundPlay.textContent=gameScore;
            if((gameScore.charAt(4))==='l') computerScore++;
            else if((gameScore.charAt(4))==='w') playerScore++;
            else drawCount++;
        }
    roundResult.textContent="Player score: "+playerScore+"; computer score: "+computerScore+"; draws: "+drawCount+".";
    if(playerScore>=5 || computerScore>=5 || drawCount>=5){
        if(playerScore>computerScore) gameResult.textContent="Player wins!";
        if(playerScore<computerScore) gameResult.textContent="Computer wins!";
        else gameResult.textContent="This game is a draw!";
        btnChoice.forEach((button)=>{
            button.removeEventListener('click', userInput);
        });
        playAgain.style.visibility="visible";
    }
}

function userInput(e){
    switch(e.target.id){
        case "rock":
            playerSelection="rock";
            break;
        case "paper":
            playerSelection="paper";
            break;
        case "scissors":
            playerSelection="scissors";
            break;
    }
    playerChoice.textContent="Player selection: "+playerSelection;
    game(playerSelection);
}