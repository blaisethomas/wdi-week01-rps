function user(humanChoice) {
//alert("you chose " + humanChoice)    
var userChoice = humanChoice;
var computerChoice = Math.random();
var x=document.getElementById("compChoice");
// document.getElementByClassName("border")[0].classList.remove("border");
document.getElementById("white_rock").classList.remove("border");
document.getElementById("white_paper").classList.remove("border");
document.getElementById("white_scissor").classList.remove("border");

    if(computerChoice < 0.34) {
	    computerChoice = "rock";
        x.innerHTML = "rock";
        document.getElementById("white_rock").classList.add("border");
    } 
    else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
        x.innerHTML = "paper";
        document.getElementById("white_paper").classList.add("border");
    } 
    else {
	    computerChoice = "scissors";
        x.innerHTML = "scissors";
        document.getElementById("white_scissor").classList.add("border");
    } //alert("Computer chose " + computerChoice);

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