let userScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".btn")
const msg = document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const userComputerPara = document.querySelector("#computer-score");

const getCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}

const drawGame = () => {
    msg.innerText = "It's a draw!. Play Again";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        computerScore++;
        userComputerPara.innerText = computerScore;
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate computer Choice
    const computerChoice = getCompChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let = userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false: true;
        } else if(userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false: true;
        }else {
            userWin = computerChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});