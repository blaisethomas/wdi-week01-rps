function user(humanChoice) {
alert("you chose " + humanChoice)    
var userChoice = humanChoice;
var computerChoice = Math.random();

    if(computerChoice < 0.34) {
	    computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } 
    else {
	    computerChoice = "scissors";
    } alert("Computer chose " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        alert("The result is a tie");
    }
    else if (choice1 === "rock") {
        if(choice2 === "scissors") {
            alert( "you win")
        }
        else {
            alert( "you lose")
        }
    }
    else if (choice1 === "paper") {
        if(choice2 === "rock") {
            alert( "you win")
        }
        else {
            alert( "you lose")
        }
    }
    else if (choice1 === "scissors") {
        if(choice2 === "paper") {
            alert( "you win")
        }
        else {
            alert( "you lose")
        }
    }
}
compare (userChoice, computerChoice)
}