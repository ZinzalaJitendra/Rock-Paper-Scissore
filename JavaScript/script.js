let userScore = 0;
let comptScore = 0;

let choices = document.querySelectorAll(".image-choice");
let msg = document.querySelector("#msg-para");

const userScorepara = document.querySelector("#user-score");
const comptScorepara = document.querySelector("#computer-score")

const gencompChoice = () => {
    const option = ["rock","paper","scissor"]; //rock ,paper,scissor random choice by the computer
    const randIx = Math.floor(Math.random() * 3);
    return option[randIx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw play again!"
    msg.style.backgroungColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats Computer ${compChoice} `; 
        msg.style.backgroungColor = "green";  
    }
    else{
        comptScore++;
        comptScorepara.innerText = comptScore;
        console.log("you lose!");
        msg.innerText = `You lost!Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroungColor = "red"; 
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = gencompChoice();
    console.log("computer choice = ",compChoice)

    //set who is winner of the game

    if(userChoice === compChoice)
        {
            drawGame();
        }
        else
        {
            let userWin = true;
            if(userChoice === "rock")
                {
                    //two option for the computer rock and scissor
                    userWin = compChoice === "paper" ? false : true;
                }
                else if(userChoice === "paper")
                {
                    //rock,scissor
                    userWin = compChoice === "rock"? true : false;
                }
                else{
                    //rock , paper
                    userWin = compChoice === "paper"? true : false;
                }
            showWinner(userWin,userChoice,compChoice);    
        }
}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    });
});
