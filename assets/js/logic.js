


let questions = [
    {
        question: "What is the capital of Armenia?",
        possibles: ["Yerevan", "Sisian", "Tbilisi", "Baku"],
        answer: 0,
        image: "./assets/img/armenia.jpg"

    },
    {
        question: "What is the capital of Kazakhstan?",
        possibles: ["Baku", "Astana", "Karagandy", "Omsk"],
        answer: 1,
        image: "./assets/img/kazakhstan.jpg"

    },
    {
        question: "What is the capital of Finland?",
        possibles: ["Stockholm", "Oslo", "Helsinki", "Copenhagen"],
        answer: 2,
        image: "./assets/img/finland.png"

    },
    {
        question: "What is the capital of Turkey?",
        possibles: ["Ankara", "Istanbul", "Antalya", "Izmir"],
        answer: 0,
        image: "./assets/img/turkey.jpg"

    },
    {
        question: "What is the capital of Slovakia?",
        possibles: ["Ljubljana", "Zagreb", "Bratislava", "Sarajevo"],
        answer: 2,
        image: "./assets/img/slovakia.jpg"

    },
    {
        question: "What is the capital of Angola?",
        possibles: ["Libreville", "Kinshasa", "Bangui", "Luanda"],
        answer: 3,
        image: "./assets/img/angola.jpg"

    },
    {
        question: "What is the capital of Ecuador?",
        possibles: ["Quito", "Bogota", "Caracas", "Santiago"],
        answer: 0,
        image: "./assets/img/ecuador.jpg"

    },
    {
        question: "What is the capital of Papua New Guinea?",
        possibles: ["Tabubil", "Lea Lea", "Victoria", "Port Moresby"],
        answer: 3,
        image: "./assets/img/papua.jpg"

    },
    {
        question: "What is the capital of Nepal?",
        possibles: ["Bhutan", "Dhaka", "Kathmandu", "Kanpur"],
        answer: 2,
        image: "./assets/img/nepal.jpg"

    },
    {
        question: "What is the capital of Vietnam?",
        possibles: ["Saigon", "Ho Chi Minh City", "Nha Trang", "Hanoi"],
        answer: 3,
        image: "./assets/img/vietnam.jpg"

    },
    {
        question: "What is the capital of Nigeria?",
        possibles: ["Niamey", "Abuja", "Agadez", "Maradi"],
        answer: 1,
        image: "./assets/img/nigeria.jpg"

    },
 
]



let i = 0;
let numCorrect = 0;
let numIncorrect = 0;
let timer1;
let timer2;
let timer3;
let timerDisplay;
let userChoice;
let userRight;
let correctIndex;
let timeRemaining = 15;


$(".btn").on("click", nextSlide);




function nextSlide() {

    $(".box").empty();

    let q = $("<h1 class='quest'>").append(questions[i].question);
    let a1 = $("<button class='options' id=0>").append(questions[i].possibles[0]);
    let a2 = $("<button class='options' id=1>").append(questions[i].possibles[1]);
    let a3 = $("<button class='options' id=2>").append(questions[i].possibles[2]);
    let a4 = $("<button class='options' id=3>").append(questions[i].possibles[3]);

    $(".box").append("<h1 class='timer'><span class='timeRemaining'>15</span> seconds<h1>")
  
    $(".box").append(q);
    $(".box").append(a1);
    $(".box").append(a2);
    $(".box").append(a3);
    $(".box").append(a4);
    timer1 = setTimeout(timeoutPage, 15000);
    timerDisplay = setInterval(function(){
        timeRemaining--;
        $(".timeRemaining").html(timeRemaining);
        if (timeRemaining<1) {
            clearInterval(timerDisplay);
            timeRemaining=15;
        }
        
    }, 1000)
 
    
    $(".options").click(function(event) {
        clearTimeout(timer1);
        userChoice = (event.target.id);

        if (userChoice==questions[i].answer) {
            userRight=true;
        }
        else {
            userRight=false;
        }
        showAnswer();
    });
}


function timeoutPage() {
    correctIndex = questions[i].answer;
    $(".box").empty();
    $(".box").append("<h1 class='declaration'>Not fast enough!</h1>")
    $(".box").append("<h1 class='correction'>The correct answer was: " + questions[i].possibles[correctIndex] + "</h1>")
    let newImage = $("<img>");
    let imageURL = questions[i].image;
    $(".box").append(newImage);
    $("img").attr('src', imageURL);
    numIncorrect++;
    clearInterval(timerDisplay);
    timeRemaining=15;
    if (i<11){
        i++;
        timer2 = setTimeout(nextSlide, 4000);
   
    }
    if (i===11) {
        clearTimeout(timer2);
        timer3 = setTimeout(finalScreen, 4000);
        
    }

}

function showAnswer() {
    correctIndex = questions[i].answer;
    $(".box").empty();
    clearInterval(timerDisplay);
    timeRemaining=15;
    if (userRight) {
        $(".box").append("<h1 class='declaration'>How did you know that?!</h1>")
        numCorrect++;
    }
    else {
        $(".box").append("<h1 class='declaration'>Time to crack open the old atlas...</h1>")
        $(".box").append("<h1 class='correction'>The correct answer was: " + questions[i].possibles[correctIndex] + "</h1>")
        numIncorrect++;
    }
    let newImage = $("<img>");
    let imageURL = questions[i].image;
    $(".box").append(newImage);
    $("img").attr('src', imageURL);
    if (i<11){
        i++;
        timer2 = setTimeout(nextSlide, 4000);
    }

    if (i===11) {
        clearTimeout(timer2);
        timer3 = setTimeout(finalScreen, 4000);
        
    }

}

function restartGame() {
    i=0;
    numCorrect = 0;
    numIncorrect = 0;
    clearInterval(timerDisplay);
    timeRemaining=15;
    $(".box").empty();
    $(".box").append("<div class='header'>Trivia Game!</div>");
    $(".box").append("<div class='instructions'><p>How well do you know your world capitals?</p><p>Choose the right answer before time runs out!</p></div>");
    $(".box").append("<button class='btn'>Start!</button>");
    $(".btn").click(nextSlide);
}

function finalScreen() {
    clearTimeout(timer3);
    clearInterval(timerDisplay);
    timeRemaining=15;
    $(".box").empty();
    $(".box").append("<h1 class='gameOver'>Game Over!</h1>")
    $(".box").append("<h1 class='correct'>Correct: " + numCorrect + "</h1><br><br>")
    $(".box").append("<h1 class='incorrect'>Incorrect: " + numIncorrect + "</h1>")
    $(".box").append("<br><button class='btn'>Restart!</button>");
    $(".btn").click(restartGame);
}


