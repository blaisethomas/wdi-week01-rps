function user(humanChoice) {
    //alert("you chose " + humanChoice)    
    var userChoice = humanChoice;
    var computerChoice = Math.random();
    var x=document.getElementById("compChoice");
    var y=document.getElementById("resulting");
    // document.getElementByClassName("border")[0].classList.remove("border");
    document.getElementById("white_rock").classList.remove("border");
    document.getElementById("white_paper").classList.remove("border");
    document.getElementById("white_scissor").classList.remove("border");

        if(computerChoice < 0.34) {
    	    computerChoice = "rock";
            x.innerHTML = "rock";
            console.log("rock")
            //$(document).ready(function(){
                $("img").click(function(){
                    $("#white_rock").addClass('animated bounceOutLeft');
                });
            //});
        } else if(computerChoice <= 0.67) {
    	    computerChoice = "paper";
            x.innerHTML = "paper";
            document.getElementById("white_paper").classList.add("animated bounce");
        } else {
    	    computerChoice = "scissors";
            x.innerHTML = "scissors";
            document.getElementById("white_scissor").classList.add("border");
        } //alert("Computer chose " + computerChoice);

    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            y.innerHTML = "Its a DRAW!";
            
        }
        else if (choice1 === "rock") {
            if(choice2 === "scissors") {
                y.innerHTML = "YOU WIN";
            }
            else {
                y.innerHTML = "YOU LOSE";
            }
        }
        else if (choice1 === "paper") {
            if(choice2 === "rock") {
                y.innerHTML = "YOU WIN";
            }
            else {
                y.innerHTML = "YOU LOSE";
            }
        }
        else if (choice1 === "scissors") {
            if(choice2 === "paper") {
                y.innerHTML = "YOU WIN";
            }
            else {
                y.innerHTML = "YOU LOSE";
            }
        }
    }
    compare (userChoice, computerChoice)
}