let playerScore=0, computerScore=0, drawCount=0, gameScore, playerSelection=null;

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
    console.log("Computer choice: "+computerSelection);
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
    //let playerScore=0, computerScore=0, drawCount=0, gameScore, playerSelection=null;/*, userInput=null;*/
    //for(let i=0; i<5; i++){ //Play 5 rounds
    //while(1){
        /*userInput=prompt("Rock, Paper or Scissors? Type 'quit' to exit");
        playerSelection=userInput.toLowerCase();*/
        /*const choice=document.querySelectorAll('.buttonContainer>button');
        choice.forEach((button)=>{
            button.addEventListener('click', ()=>{
                playerSelection=button.id;
                console.log("Player selection: "+playerSelection);
            });
        });*/ //PUT AT THE BEGINNING
        console.log("Inside game player selection (choice variable): "+playerSelection);
        //console.log("playerScore: "+playerScore+" computerScore: "+computerScore);*/
        //playerSelection=choice;
    //while((playerScore<5) || (computerScore<5)){
        if(playerSelection==="rock" || playerSelection==="paper" || playerSelection==="scissors"){ //Take user input and check if it's a valid input
            gameScore=playGame(playerSelection, computerPlay());
            console.log(gameScore);
            if((gameScore.charAt(4))==='l') computerScore++;
            else if((gameScore.charAt(4))==='w') playerScore++;
            else drawCount++;
            //if(test>=5) return;
        }
        /*else if(playerSelection==="quit"){
            console.log("Closing game");
            return;
        //    break;
        }*/
        else{
            console.log("Invalid choice, try again.");
    //      i--;
        }
    //}
    /*if(playerScore>computerScore) console.log("Player wins!");
    else if(playerScore<computerScore) console.log("Computer wins!");
    else console.log("Fair game");*/
    console.log("Player score: "+playerScore+"; computer score: "+computerScore+"; draws: "+drawCount+".");
}

//Temporary, need to change this method
/*const startGame=document.getElementById('start');
startGame.onclick=()=>{
    console.log("Game started.");
    game();
};*/



//let choice=null;

const btnChoice=document.querySelectorAll('.buttonContainer>button');
btnChoice.forEach((button)=>{
    button.addEventListener('click', ()=>{
        switch(button.id){
            case "rock":
                playerSelection="rock";
                break;
            case "paper":
                playerSelection="paper";
                break;
            case "scissors":
                playerSelection="scissors";
                break;
            /*case "quit":
                console.log("quit, to implement");
                break;*/
        }
        console.log("Player selection: "+playerSelection);
        game(playerSelection);
    });
});

/*if(playerScore>computerScore) console.log("Player wins!");
    else if(playerScore<computerScore) console.log("Computer wins!");
    else console.log("Fair game");*/
//    console.log("Player score: "+playerScore+"; computer score: "+computerScore+"; draws: "+drawCount+".");
//game();