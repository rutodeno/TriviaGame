
// the game brings up a question.  The user will have 50 seconds to answer
// allow the user to select an answer
// check the user input and see if its right
// if its right, saw correct
// if its wrong tally the wrong answers
// the game loads up a new question. Repeat the process
// After five questions, show the results

// window.onload to start function
$(document).ready (function () {

    $("#loadGame").click(function(){

        startPrompt();

        $("#background").css("background-color","white");



    });


});

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

$(document).on('click', '.answer', function() {
    console.log('sup');
});

$(document).on('mouseenter', '.answer', function() {
    console.log('yo');
});

function displayPrompt() {



    $("#wrapper").html(trivia[count].q + "<br>" +
        "<div class='answer'>" + trivia[count].a[0] + "</div><br>" +
        trivia[count].a[1] + "<br>" +
        trivia[count].a[2] + "<br>" +
        trivia[count].a[3]
    );

        // var newDiv = $("<div id='imageId'>");

        // newDiv.attr("a", trivia[count].a[0]);
        // newDiv.attr("b", trivia[count].a[1]);
        // newDiv.attr("c", trivia[count].a[2]);
        // newDiv.attr("d", trivia[count].a[3]);

        // $("#wrapper").append(newDiv);




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

// intergrate timer with count so that both stop at the end of the trivia question.
// Create buttons and save them in an array. This array hold the user answer. If the users clicks an answer it should move to next question.
// at the end, the game brings out the users answers

//displayPrompt();


/* 
    start: function(){

        if (!timerChecker){
            intervalid = setInterval(trivia.counter, 1000);
            //setTimeout(trivia.loadNewQuestion, timer);
            trivia.loadNewQuestion(trivia.question1, trivia.answerArr1);

        }

        

        
    },

    counter: function(){

        timer--;    

        $("#timeDisplay").html("<p>Time Remaining: "+timer+"</p>");   

        if (timer === 0){
            timer = 50; // restarting timer

            trivia.loadNewQuestion(trivia.question2, trivia.answerArr2);

        }
        
        
    },

    loadNewQuestion: function(question, answerArr){

        var newDiv =$("<div>");

        newDiv.append(question +"<br>")

        $.each(answerArr, function(index, value){
            newDiv.append(value+"<br>")});

            $("#wrapper").html(newDiv);
    },

    nextQuestion: function (){



    },
    reset: function (){

    }



};



*/