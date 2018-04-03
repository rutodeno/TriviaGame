
// the game brings up a question.  The user will have 50 seconds to answer
// allow the user to select an answer
// check the user input and see if its right
// if its right, saw correct
// if its wrong tally the wrong answers
// the game loads up a new question. Repeat the process
// After five questions, show the results

// 


var timer = 30;
var intervalid;
var count=0;
var timerChecker = false;

var trivia = [{
    q: "What does the 'AA' arm patch, worn by the 82nd soldiers, stand for ?",
    a: ["a. All American",
        "b. Anti-Aircraft",
        "c. Academic Awards",
        "d. Active Army"]
},

{
    q: "What is the Home Station for th 82d Airbone ?",
    a: ["a. Fort Cambell",
        "b. Fort Gordon",
        "c. Fort Bliss",
        "d. Fort Bragg"]

},
{
    q: "Approximately how many jumps are conducted every month at the Home Station ?",
    a: ["a. 100",
        "b. 5,000",
        "c. 10,000",
        "d. 15,000"]

},
{
    q: "When was the 82d Airborne founded ?",
    a: ["a. 1920",
        "b. 1917",
        "c. 1941",
        "d. 1909"]

},
{
    q: "Which country music star served in the 82d airborne  ?",
    a: ["a. Fort Cambell",
        "b. Fort Gordon",
        "c. Fort Bliss",
        "d. Fort Bragg"]
}
];

$(document).ready(function() {

	$("#loadGame").on("click", function() {
		
		startPrompt();
    
		$("#background").css("background-color","#fff");

		$(".answer").on("click", function(){
                // this is where the magic happens
    			console.log("yo bro");	
		});
		
		$(".answer").hover(function(){
			
			$(this).css("background-color","#0ff0ff");
		}, function(){
			$(this).css("background-color","white");	
		});
	
	});
	
});


function displayPrompt() {

    $("#wrapper").html(trivia[count].q + "<br>" +
        "<div class ='answer'>"+trivia[count].a[0] + "</div><br>" +
        "<div class ='answer'>"+trivia[count].a[1] + "</div><br>" +
        "<div class ='answer'>"+trivia[count].a[2] + "</div><br>" +
        "<div id ='answer'>"+trivia[count].a[3] + "</div>"
    );
};

function displayTime () {
    intervalid = setInterval(timeforPrompt,1000)
}

function timeforPrompt(){
    timer--;

    console.log("timer: "+timer);

    $("#timeDisplay").html("<p>Time Remaining: "+timer+"</p>");

    if (timer === 0){
        timer = 30; // restarting timer
    };

}


function loadPrompt() {

    count++;
    console.log("count: " + count)

    setTimeout(displayPrompt, 1000);

    if (count === trivia.length) {

        stopPrompt();
    };
};

function startPrompt() {
    displayTime();
    displayPrompt();
    showPrompt = setInterval(loadPrompt, 30000);

};

function stopPrompt() {
    clearInterval(showPrompt);

};
