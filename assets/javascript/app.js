
// the game brings up a question.  The user will have 50 seconds to answer
// allow the user to select an answer
// check the user input and see if its right
// if its right, saw correct
// if its wrong tally the wrong answers
// the game loads up a new question. Repeat the process
// After five questions, show the results



var timer = 30;
var intervalTimer =0;
var invervalPrompt=0; // hold 
var timeoutDisplay = 0;
var count = 0;
var timerChecker = false;
var correctAnswer = 0;

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
    q: "Which country music star served in the 82d Airborne  ?",
    a: ["a. Elvis Presly",
        "b. Johnny Cash",
        "c. Craig Morgan",
        "d. Dolly Parton"]
},
{
    q: "Which 1962 classic movie featured the 82d Airborne Division  ?",
    a: ["a. Frozen",
        "b. Dunkirk",
        "c. Airbone",	
        "d. The Longest Day"]
}
];



$(document).ready(function () {

    $("#loadGame").on("click", function () {

        startTrivia();

        $("#background").css("background-color", "#fff");


    });

});


$(document).on('click', '.answer', function() {


    console.log($(this).text());
    console.log(trivia[count].a[0]);
    console.log("count: " +count);

    // this is where the magic happens
    // checking user input. if user selects an answer, check it and see if its correct. grade the use at the end


       if ( (count === 0) && ($(this).text() === trivia[count].a[0]) ){
            
            console.log("you got it");
		    correctAnswer ++;

        } else if ( (count === 1) && ($(this).text() === trivia[count].a[3]) ){
            
            console.log("you got it");
		    correctAnswer ++;
        } else if ( (count === 2) && ($(this).text() === trivia[count].a[2]) ){
            
            console.log("you got it");
        } else if ( (count === 3) && ($(this).text() === trivia[count].a[2]) ){
            
            console.log("you got it");
		    correctAnswer ++;
        } else if ( (count === 4) && ($(this).text() === trivia[count].a[0]) ){
            
            console.log("you got it");
		    correctAnswer ++;
        } else if ( (count === 5) && ($(this).text() === trivia[count].a[0]) ){
            
            console.log("you got it");
		    correctAnswer ++;
        } else {

            console.log("you didn't get it");
        }

        if (count === (trivia.length -1)) {

            stopTrivia();
        };

  
        loadTrivia()



});


$(document).on("mouseenter",".answer",function () {
    // why does 'this' work and not .answer ?
    $(this).css("background-color", "#73a4c9");  
   
});

$(document).on("mouseleave",".answer",function () {

    $(this).css("background-color", "#fff");
   
});

function displayTrivia() {

    $("#wrapper").html(trivia[count].q + "<br>" +
        "<div class ='answer'>" + trivia[count].a[0] + "</div><br>" +
        "<div class ='answer'>" + trivia[count].a[1] + "</div><br>" +
        "<div class ='answer'>" + trivia[count].a[2] + "</div><br>" +
        "<div class ='answer'>" + trivia[count].a[3] + "</div>"
    );

};

function displayTime() {
    intervalTimer = setInterval(timeforPrompt, 1000)
}

function timeforPrompt() {
    timer--;
    $("#timeDisplay").html("<p>Time Remaining: " + timer + "</p>");

    if (timer === 0) {
        timer = 30; // restarting timer
    };

}


function loadTrivia() {

    count++;
    console.log("count: " + count)

    var timeoutDisplay = setTimeout(displayTrivia, 1000);
    console.log(timeoutDisplay +"TimeoutDisplay");

};

function startTrivia() {
    displayTime();
    displayTrivia();
    intervalPrompt = setInterval(loadTrivia, 30000);
    console.log("showPrompt"+intervalPrompt);

};

function stopTrivia() {
    clearInterval(invervalPrompt);
    clearInterval(intervalTimer);
    clearTimeout(timeoutDisplay);

};
