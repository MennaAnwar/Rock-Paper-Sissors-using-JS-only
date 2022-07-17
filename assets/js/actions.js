// initially both users' scores = 0
let userScore = 0,
    computerScore = 0,
    round = 1;

let userChoice;
let computerChoice;

//start game of 5 rounds
function startGame() {
    while (round < 6) {
        console.log('---------Round : '+round+'---------')
        // takes input from user
        userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
        // generates random play of computer
        computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        compare();
    }
    displayResult();
}

// function that compares user's choice and computer choice
function compare() {
    if (userChoice === computerChoice) {
        console.log('USER : ' + userChoice);
        console.log('Computer : ' + computerChoice);
        round++;
        return "tie";
    }
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            return "rock wins"
        }
        else if (computerChoice === "paper") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            return "paper wins";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            return "scissors win"
        }
        else if (computerChoice === "rock") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            return "paper wins";
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            return "scissors win"
        }
        else if (computerChoice === "rock") {
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            return "rock wins";
        }
    }
    else {
        alert("Enter Correct Choice")
    }

}

// function that displayes the results at the end pf the game
function displayResult() {
    console.log("YOU : " + userScore);
    console.log("Computer : " + computerScore);
    if (userScore > computerScore) {
        console.log("YOU WON !!");
    }
    else if (userScore < computerScore) {
        console.log("Computer WON");
    }
    playNewGame();
}

// function that checks if the user wants to start new game
function playNewGame() {
    let newGame = prompt("Would you like to play new game ?? Yes or NO").toLowerCase();
    switch (newGame) {
        case 'yes': userScore = 0, computerScore = 0 , round=1;
            startGame();
            break;
    }

}
startGame();
