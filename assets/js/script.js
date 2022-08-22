var currentQuestion = document.querySelector("#questionField");
var start = document.querySelector("#startBtn");
var option1 = document.querySelector("#answer1");
var option2 = document.querySelector("#answer2");
var option3 = document.querySelector("#answer3");
var option4 = document.querySelector("#answer4");
var result = document.querySelector("#result");
var timeEl = document.querySelector("#time");
var answerEl = document.querySelector("#answers");

var question1 = {
    question: "What does CSS stand for?",
    option1: "Cyber Security System",
    option2: "Computer Screen Standards",
    option3: "Cascading Style Sheet",
    option4: "Cyberdyne Systems Skynet",
    correctAnswer: "option3"
}

var question2 = {
    question: "What does DOM stand for in JavaScript?",
    option1: "Document Object Model",
    option2: "Digital Online Memory",
    option3: "Digital Only Module",
    option4: "Disply Object Model",
    correctAnswer: "option1"
}

var question3 = {
    question: "JavaScript booleans can have one of two values: ____ or _____.",
    option1: "yes, no",
    option2: "true, false",
    option3: "on, off",
    option4: "high, low",
    correctAnswer: "option2"
}

var question4 = {
    question: "What is the JSON method used to convert an object to a string?",
    option1: "stringize()",
    option2: "stringify()",
    option3: "stringing()",
    option4: "stringiness()",
    correctAnswer: "option2"
}

var question5 = {
    question: "What is the term used to describe an event on a target element triggering up to the parents of the target.",
    option1: "Looping",
    option2: "Layering",
    option3: "Surfacing",
    option4: "Bubbling",
    correctAnswer: "option4"
}

var question6 = {
    question: "The _____________ method attaches an event handler to the specified element.",
    option1: "addEventListener()",
    option2: "addEventClick()",
    option3: "mouseDownEvent()",
    option4: "requestEvent()",
    correctAnswer: "option1"
}

var question7 = {
    question: "The 3 types of popup boxes in JavaScript are _____ , _______ , and ______ .",
    option1: "alert, confirm, and prompt",
    option2: "left, center, and right",
    option3: "upper, lower, and middle",
    option4: "alpha, beta, gamma",
    correctAnswer: "option1"
}

var question8 = {
    question: "The first index in an array is the  _______ index.",
    option1: "initial",
    option2: "primary",
    option3: "0",
    option4: "main",
    correctAnswer: "option3"
}

var question9 = {
    question: "The ______ scope includes variables that can be accessed from anywhere in a JavaScript program ",
    option1: "Local",
    option2: "Global",
    option3: "Block",
    option4: "Function",
    correctAnswer: "option2"
}

var question10 = {
    question: "Array _________ methods operate on every array item.",
    option1: "value",
    option2: "function",
    option3: "debugging",
    option4: "iteration",
    correctAnswer: "option4"
}

var i = 0;
var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var correctAnswer = "";
var chosenAnswer = "";
var wrongSound = new Audio("./assets/sounds/Wrong.mp3");
var rightSound = new Audio("./assets/sounds/Right.mp3");

currentQuestion.innerHTML = "<br> This quiz is to test you knowledge of JavaScript. <br> You will have 2 and a half minutes to answer 10 questions. <br> you will be penalized 15 seconds for each incorrect answer given. <br> <br> Press 'START' to begin. &nbsp; GOOD LUCK!";
answers.style.display = "none";


function init() {

    currentQuestion.setAttribute("style", "display: block; text-align: left");
    answers.style.display = "block";
    start.style.display = "none";


    timeEl.textContent = "";
    secondsLeft = 150;

    setInterval(timer, 1000);

    function timer() {
        var minutes = Math.floor(secondsLeft / 60);
        var seconds = secondsLeft % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        else {
            seconds = seconds;
        }

        timeEl.textContent = "Time remaining: " + minutes + ":" + seconds;
        secondsLeft--;

        if (secondsLeft === 0) {
            window.location.href = "./timesup.html"
        };

    }

    function quiz() {

        function randomizeQuestion() {
            for (var j = questionBank.length - 1; j > 0; j--) {
                var n = Math.floor(Math.random() * (j + 1));
                var temp = questionBank[j];
                questionBank[j] = questionBank[n];
                questionBank[n] = temp;
            }
        }

        randomizeQuestion();

        function askQuestion() {
            result.textContent = "";
            currentQuestion.textContent = ((i + 1) + ". " + questionBank[i].question);
            option1.textContent = questionBank[i].option1;
            option2.textContent = questionBank[i].option2;
            option3.textContent = questionBank[i].option3;
            option4.textContent = questionBank[i].option4;
            correctAnswer = questionBank[i].correctAnswer;
            document.querySelector("#answer1").disabled = false;
            document.querySelector("#answer2").disabled = false;
            document.querySelector("#answer3").disabled = false;
            document.querySelector("#answer4").disabled = false;
            console.log(correctAnswer);
        }

        function playWrong() {
            wrongSound.play();
        }

        function playRight() {
            rightSound.play();
        }

        function getAnswer() {

            if (chosenAnswer === correctAnswer) {
                playRight();
                result.textContent = "CORRECT!";
            }
            else {
                playWrong();
                result.textContent = "INCORRECT!";
                secondsLeft = secondsLeft - 15;
            }
        }

        function disableButtons() {

            document.querySelector("#answer1").disabled = true;
            document.querySelector("#answer2").disabled = true;
            document.querySelector("#answer3").disabled = true;
            document.querySelector("#answer4").disabled = true;
        }

        function checkAnswer() {
            disableButtons();
            getAnswer();
            if (i < questionBank.length - 1) {
                i++;
                console.log(i);
                setTimeout(askQuestion, 1200);
            }
            else {
                setTimeout(quizFinished, 1200);
            }
        }

        function quizFinished() {
            window.location.href = "./finished.html"
        }

        option1.addEventListener("click", function () {
            console.log("You chose answer 'A'");
            chosenAnswer = "option1";
            checkAnswer();
        }
        )

        option2.addEventListener("click", function () {
            console.log("You chose answer 'B'");
            chosenAnswer = "option2";
            checkAnswer();
        }
        )

        option3.addEventListener("click", function () {
            console.log("You chose answer 'C'");
            chosenAnswer = "option3";
            checkAnswer();
        }
        )

        option4.addEventListener("click", function () {
            console.log("You chose answer 'D'");
            chosenAnswer = "option4";
            checkAnswer();
        }
        )
        console.log(i)
        askQuestion();
    }

    console.log(questionBank);

    quiz();
}

start.textContent = "START";

start.addEventListener("click", init);