
// the game brings up a question.  The user will have 50 seconds to answer
// allow the user to select an answer
// check the user input and see if its right
// if its right, saw correct
// if its wrong tally the wrong answers
// the game loads up a new question. Repeat the process
// After five questions, show the results

// window.onload to start function

window.onload = function () {

    $("#loadGame").click(trivia.start)
};

var timer = 50;
var intervalid;
var count;
var timerChecker = false;

var trivia = {
     
        question1 : 'What does the "AA" arm patch, worn by the 82nd soldiers, stand for ?',
        answerArr1 : ["a. All American", "b. Anti-Aircraft", "c. Academic Awards", "d. Active Army"],
   
    
        question2: "What is the Home Station for th 82d Airbone ?",
        answerArr2: ["a. Fort Cambell", "b. Fort Gordon", "c. Fort Bliss", "d. Fort Bragg"],
    
   
        question3: "Approximately how many jumps are conducted every month at the Home Station ?",
        answerArr3: ["a. 100", "b. 5,000", "c. 10,000", "d. 15,000"],
   
  
        question4: "When was the 82d Airborne founded ?",
        answerArr4: ["a. 1920", "b. 1917", "c. 1941", "d. 1909"],
   
   
        question5: "Which country music star served in the 82d airborne  ?",
        answerArr5: ["a. Fort Cambell", "b. Fort Gordon", "c. Fort Bliss", "d. Fort Bragg"],
    


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



