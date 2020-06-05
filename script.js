//The ready() method is used to make a function available after the document is loaded.
$(document).ready(function () {
    var idx = 0
    var correctAnswers = 0


    //When users click on the start button, the main div will be hidden, and the question function will be rendered. 
    $(".btn-start").click(function () {
        $(".main-div").hide();
        renderQuestion()
    });

    // Here is an array of objects for each question (including the answers and the correct answer (key and value)). 
    var questionList = [
        {
            question: "Commonly used data types DO NOT include:",
            answers: ["alerts", "string", "booleans", "numbers"],
            correct: "alerts"
        },

        {
            question: "String values must be enclosed within ___ when being assigned to variables:",
            answers: ["commas", "curly brackets", "quotes", "parentheses"],
            correct: "parentheses"
        },

        {
            question: "Arrays in Javascript can be used to score:",
            answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            correct: "all of the above"
        },

        {
            question: "The condition in an if/else statement is enclosed within____ ",
            answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
            correct: "parentheses"
        },
        {
            question: "A very useful tool used during development and debugging for printing content to debugger is:",
            answers: ["Javascript", "terminal/bash", "for loops", "console.log"],
            correct: "console.log"
        },

    ]

    //Here is where the function is defined. 
    function renderQuestion() {
        /*By using jQuery, I am creating an HTML element (h1) and adding content to h1. Basically, question list will start to appear on the screen at the index (starting from idx=0) for each question.
        I used an empty() method to prevent so that before a question is rendered, the div will be emptied (both for the buttons and questions).
        */
        $(".button").empty()
        $(".question").empty()
        $(".final-scores").empty()
        $(".question").html("<h1>" + questionList[idx].question + "</h1>")
        for (i = 0; i < questionList[idx].answers.length; i++) {
            $(".button").append("<button class='answer-button btn btn-primary'>" + questionList[idx].answers[i] + "</button>")
        }
    }


    $(".button").on("click", ".answer-button", function () {
        idx++
        renderQuestion()
        correctAnswer()
    });


});


        //for (i=0; i<questionList[idx].correct.length;i++) {
            //if (questionList[idx].answers[i] === questionList.correct[0]) {
                //$(".correct").html("<p>" + "correct" + "</p>").append("<h2>" + CORRECT ANSWER + "</h2>")
           //}