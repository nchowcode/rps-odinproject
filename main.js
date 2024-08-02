function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let option = choices[Math.floor(Math.random() * choices.length)];
    return option;
    
}

function getHumanChoice(){
    let humanChoice; 
    const choices = {1: 'rock', 2: 'paper', 3: 'scissors'};
    while (true) {
        humanChoice = window.prompt("Choose an option:\n1: Rock\n2: Paper\n3: Scissors\n");
        humanChoice = parseInt(humanChoice);

        if (choices[humanChoice]){
            return choices[humanChoice];    //  rock/paper/scissor
        }
        else{
            alert("Invalid choice. Please choose a number between 1 and 3.");
        }
    }
} 

console.log(getHumanChoice());