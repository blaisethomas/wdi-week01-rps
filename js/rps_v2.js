$(document).ready(function(){

    //player move animations
    $("#black_rock").click(function(){
        $("#black_rock").addClass('animated rubberBand')    
    });

    $("#black_scissor").click(function(){
        $("#black_scissor").addClass('animated rubberBand')
    });

    $("#black_paper").click(function(){
        $("#black_paper").addClass('animated rubberBand')
    });
});

function user(humanChoice) {
    console.log("you choose " + humanChoice) 
    var computerChoice = Math.random();
    console.log("computer chooses " + computerChoice);  

    //reset animations 
    //all animations with thanks daneden => http://daneden.github.io/animate.css/
    $("#black_rock").removeClass();
    $("#black_scissor").removeClass();
    $("#black_paper").removeClass();
    $("#white_rock").removeClass();
    $("#white_scissor").removeClass();
    $("#white_paper").removeClass();

    // computer's move animations
    if(computerChoice < 0.34) {
	    computerChoice = "rock";
        $("#white_rock").addClass('animated rubberBand');
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
        $("#white_paper").addClass('animated rubberBand');
    } else {
	    computerChoice = "scissors";
        $("#white_scissor").addClass('animated rubberBand');
    } 

    // win check
    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            // y.innerHTML = "Its a DRAW!";
            $("img").addClass('animated wobble')   
        } else if (choice1 === "rock") {
            if(choice2 === "scissors") {
                // y.innerHTML = "YOU WIN";
            } else {
                // y.innerHTML = "YOU LOSE";
            }
        } else if (choice1 === "paper") {
            if(choice2 === "rock") {
                // y.innerHTML = "YOU WIN";
            }
            else {
                // y.innerHTML = "YOU LOSE";
            }
        } else if (choice1 === "scissors") {
            if(choice2 === "paper") {
                // y.innerHTML = "YOU WIN";
            }
            else {
                // y.innerHTML = "YOU LOSE";
            }
        }
    }
    compare (humanChoice, computerChoice)
}











