function user(humanChoice) {

    console.log("you choose " + humanChoice)   
    
    //variables
    var computerChoice = Math.random();
    var x=document.getElementById("compChoice");
    var y=document.getElementById("resulting");

    //reset animations 
    //all animations thanks to animate.css => http://daneden.github.io/animate.css/
    $("#black_rock").removeClass('border animated flipInX')
    $("#black_scissor").removeClass('border animated flipInX')
    $("#black_paper").removeClass('border animated flipInX')

    // computer's move
    if(computerChoice < 0.34) {
	    computerChoice = "rock";
        x.innerHTML = "rock";
        //console.log("rock")
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
        x.innerHTML = "paper";
        //document.getElementById("white_paper").classList.add("border animated flipInX");
    } else {
	    computerChoice = "scissors";
        x.innerHTML = "scissors";
        //document.getElementById("white_scissor").classList.add("border animated flipInX");
    } //alert("Computer chose " + computerChoice);

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

//animations
$(document).ready(function(){




    $("#black_rock").click(function(){
        $("#black_rock").addClass('border animated flipInX')
    });

    $("#black_scissor").click(function(){
        $("#black_scissor").addClass('border animated flipInX')
    });

    $("#black_paper").click(function(){
        $("#black_paper").addClass('border animated flipInX')
    });

});






