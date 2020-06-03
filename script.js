//The ready() method is used to make a function available after the document is loaded.
        $(document).ready(function () {
        var idx = 0

            //When users click on the start button, the main div will be hidden, and the question function will be rendered. 
            $(".btn-start").click(function () {
                $(".main-div").hide();
                renderQuestion()
            });

            // Here is an array of objects for each question (including the answers). 
            var questionList = [ 
                {
                    question:"Commonly used data types DO NOT include:", 
                    answers: ["alerts", "string", "booleans", "numbers"], 
                    correct: "alerts"
                },

                {   question:"String values must be enclosed within ___ when being assigned to variables:",
                    answers: ["commas", "curly brackets", "quotes", "parentheses"], 
                    correct: "parentheses"
                }, 

                {   question:"String values must be enclosed within ___ when being assigned to variables:",
                    answers: ["commas", "curly brackets", "quotes", "parentheses"], 
                    correct: "parentheses"
                }, 

            ]    
            
            //Here is where the function is defined. 
                function renderQuestion () {
                    // By using jQuery, I am creating an HTML element (h1) and adding content to h1. Basically, question list will start to appear on the screen at the index (starting from idx=0) for each question. 
                    $(".question").html("<h1>" + questionList[idx].question + "</h1>")
                    for (i=0; i<questionList[idx].answers.length; i++) {
                        $(".button").append("<button class='answer btn btn-primary'>" + questionList[idx].answers[i] + "</button>") 
                    }
                } 

                   $(".button").on ("click", ".answer", function(){
                       idx++
                       renderQuestion() 
    
             });

        });
