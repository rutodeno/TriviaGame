
// the game brings up a question.  The user will have 50 seconds to answer
// allow the user to select an answer
// check the user input and see if its right
// if its right, saw correct
// if its wrong tally the wrong answers
// the game loads up a new question. Repeat the process
// After five questions, show the results


var timer = 30;
var intervalTimer = 0;
var intervalPrompt = 0; // hold 
var timeoutDisplay = 0;
var count = 0;
var timerChecker = false;
var correctAnswer = 0;
var restartBtn;

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


$(document).on('click', '.answer', function () {


    console.log($(this).text());
    console.log(trivia[count].a[0]);
    console.log("count: " + count);

    
    if (!timerChecker) {    // every time you click an answer, the clock resets
        timer = 30;
    };

    // this is where the magic happens
    // checking user input. if user selects an answer, check it and see if its correct. grade the use at the end

    if ((count === 0) && ($(this).text() === trivia[count].a[0])) {

        console.log("you got it");
        correctAnswer++;

    } else if ((count === 1) && ($(this).text() === trivia[count].a[3])) {

        console.log("you got it");
        correctAnswer++;
    } else if ((count === 2) && ($(this).text() === trivia[count].a[2])) {

        console.log("you got it");
    } else if ((count === 3) && ($(this).text() === trivia[count].a[2])) {

        console.log("you got it");
        correctAnswer++;
    } else if ((count === 4) && ($(this).text() === trivia[count].a[0])) {

        console.log("you got it");
        correctAnswer++;
    } else if ((count === 5) && ($(this).text() === trivia[count].a[0])) {

        console.log("you got it");
        correctAnswer++;
    } else {

        console.log("you didn't get it");
    }

    loadNextQuestion()
    

    if (count > 5) {     // stop the game.  Enable restart functionality.

        stopTrivia();
    };



});


$(document).on("mouseenter", ".answer", function () {
    // why does 'this' work and not .answer ?
    $(this).css("background-color", "#73a4c9");

});

$(document).on("mouseleave", ".answer", function () {

    $(this).css("background-color", "#fff");

});

$(document).on("click", "#restartID", function(){
    console.log("yo");
    restartGame();

    /// current situation. find a way to erase restart button

});

function displayQuestion() {

    if (count < 6 ) {
        $("#wrapper").html(trivia[count].q + "<br>" +
            "<div class ='answer'>" + trivia[count].a[0] + "</div><br>" +  // update time on DOM
            "<div class ='answer'>" + trivia[count].a[1] + "</div><br>" +
            "<div class ='answer'>" + trivia[count].a[2] + "</div><br>" +
            "<div class ='answer'>" + trivia[count].a[3] + "</div>"
        );

    }

};

function timeforPrompt() {
    timer--;
    $("#timeDisplay").html("<p>Time Remaining: " + timer + "</p>"); // update time on DOM

    if (timer === 0) {
        timer = 30; // restarting timer
    };
}

function loadNextQuestion() {

    count++;
    console.log("count: " + count)
    var timeoutDisplay = setTimeout(displayQuestion, 1000); // loading our questions
    console.log(timeoutDisplay + " TimeoutDisplay");


};


function displayTime() {
    
    intervalTimer = setInterval(timeforPrompt, 1000) // loading our timer
    intervalPrompt = setInterval(loadNextQuestion, timer*1000); // loading our questions every 30 seconds
    console.log("Trivia Timeout "+intervalPrompt);
    console.log("TImer Prompt "+intervalTimer);
}


function startTrivia() {
    displayTime();
    displayQuestion();

};

function stopTrivia() {
    clearInterval(intervalPrompt);
    clearInterval(intervalTimer);
    clearTimeout(timeoutDisplay);

    $("#wrapper").html("Congratulation !!! You have got "+correctAnswer+"answers right. Click <strong> Restart </strong> to start the game again.");


    var restart = $("<button type ='button' id='restartID' class='btn btn-info btn-lg'>Restart</button>");

    $("#restartBtn").html(restart);

};

function restartGame() { // restart game. 

    count = 0;
    timer = 30;
    startTrivia();

};
