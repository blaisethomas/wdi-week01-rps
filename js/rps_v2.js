function user(humanChoice) {
    console.log("you choose " + humanChoice) 
    
      

    

    var computerChoice = Math.random();
    if(computerChoice < 0.34) {
	    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } else {
	    computerChoice = "scissors";
    } 
    console.log("computer chooses " + computerChoice);

    // win check
    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            $("img").addClass('animated wobble')   
        } else if (choice1 === "rock") {
            if(choice2 === "scissors") {
                $("#black_paper").addClass('animated fadeOut');
                $("#black_scissor").addClass('animated fadeOut');
                $("#white_paper").addClass('animated fadeOut');
                $("#white_rock").addClass('animated fadeOut');
                $("#black_rock").addClass('animated pulse');
                $("#white_scissor").addClass('animated bounceOutDown');
            } else {
                $("#black_paper").addClass('animated fadeOut');
                $("#black_scissor").addClass('animated fadeOut');
                $("#white_rock").addClass('animated fadeOut');
                $("#white_scissor").addClass('animated fadeOut');
                $("#black_rock").addClass('animated bounceOutUp');
                $("#white_paper").addClass('animated pulse');
            }
        } else if (choice1 === "paper") {
            if(choice2 === "rock") {
                $("#black_paper").addClass('animated pulse');
                $("#white_rock").addClass('animated bounceOutDown');
                $("#black_rock").addClass('animated fadeOut');
                $("#black_scissor").addClass('animated fadeOut');
                $("#white_scissor").addClass('animated fadeOut');
                $("#white_paper").addClass('animated fadeOut');
            } else {
                $("#black_paper").addClass('animated bounceOutUp');
                $("#white_scissor").addClass('animated pulse');
                $("#black_rock").addClass('animated fadeOut');
                $("#black_scissor").addClass('animated fadeOut');
                $("#white_rock").addClass('animated fadeOut');
                $("#white_paper").addClass('animated fadeOut');
            }
        } else if (choice1 === "scissors") {
            if(choice2 === "paper") {
                $("#white_paper").addClass('animated bounceOutDown');
                $("#black_scissor").addClass('animated pulse');
                $("#white_rock").addClass('animated fadeOut');
                $("#white_scissor").addClass('animated fadeOut');
                $("#black_rock").addClass('animated fadeOut');
                $("#black_paper").addClass('animated fadeOut');
            }
            else {
                $("#black_scissor").addClass('animated bounceOutUp');
                $("#white_rock").addClass('animated pulse');
                $("#black_paper").addClass('animated fadeOut');
                $("#black_rock").addClass('animated fadeOut');
                $("#white_scissor").addClass('animated fadeOut');
                $("#white_paper").addClass('animated fadeOut');
            }
        }
    }
    compare (humanChoice, computerChoice)
}

function reset(){
//reset animations 
    //all animations with thanks daneden => http://daneden.github.io/animate.css/
    location.reload();
}









