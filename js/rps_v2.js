$(document).ready(function(){

    //player move animations
    $("#black_rock").click(function(){
        $("#black_rock").addClass('border animated rubberBand')
    });

    $("#black_scissor").click(function(){
        $("#black_scissor").addClass('border animated rubberBand')
    });

    $("#black_paper").click(function(){
        $("#black_paper").addClass('border animated rubberBand')
    });
});

function user(humanChoice) {

    console.log("you choose " + humanChoice)   

    //variables
    var computerChoice = Math.random();
    var x=document.getElementById("compChoice");
    var y=document.getElementById("resulting");

    //reset animations 
    //all animations thanks to animate.css => http://daneden.github.io/animate.css/
    $("#black_rock").removeClass('border animated rubberBand')
    $("#black_scissor").removeClass('border animated rubberBand')
    $("#black_paper").removeClass('border animated rubberBand')
    $("#white_rock").removeClass('border animated rubberBand')
    $("#white_scissor").removeClass('border animated rubberBand')
    $("#white_paper").removeClass('border animated rubberBand')

    // computer's move
    if(computerChoice < 0.34) {
	    computerChoice = "rock";
        x.innerHTML = "rock";
        $("#white_rock").addClass('border animated rubberBand')
        
        //console.log("rock")
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
        x.innerHTML = "paper";
        $("#white_paper").addClass('border animated rubberBand')
    } else {
	    computerChoice = "scissors";
        x.innerHTML = "scissors";
        $("#white_scissor").addClass('border animated rubberBand')
    } console.log("computer chooses " + computerChoice);

    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            y.innerHTML = "Its a DRAW!";
            
        } else if (choice1 === "rock") {
            if(choice2 === "scissors") {
                y.innerHTML = "YOU WIN";
            } else {
                y.innerHTML = "YOU LOSE";
            }
        } else if (choice1 === "paper") {
            if(choice2 === "rock") {
                y.innerHTML = "YOU WIN";
            }
            else {
                y.innerHTML = "YOU LOSE";
            }
        } else if (choice1 === "scissors") {
            if(choice2 === "paper") {
                y.innerHTML = "YOU WIN";
            }
            else {
                y.innerHTML = "YOU LOSE";
            }
        }
    }
    compare (humanChoice, computerChoice)
}











