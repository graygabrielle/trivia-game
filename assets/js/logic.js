

let questions = [
    {
        question: "What is the capital of Armenia?",
        possibles: ["Yerevan", "Sisian", "Tbilisi", "Baku"],
        answer: 0

    },
    {
        question: "What is the capital of Kazakhstan?",
        possibles: ["Baku", "Astana", "Karagandy", "Omsk"],
        answer: 1

    },
    {
        question: "What is the capital of Finland?",
        possibles: ["Stockholm", "Oslo", "Helsinki", "Copenhagen"],
        answer: 2

    },
    {
        question: "What is the capital of Turkey?",
        possibles: ["Ankara", "Istanbul", "Antalya", "Izmir"],
        answer: 0

    },
    {
        question: "What is the capital of Slovakia?",
        possibles: ["Ljubljana", "Zagreb", "Bratislava", "Sarajevo"],
        answer: 2

    },
    {
        question: "What is the capital of Angola?",
        possibles: ["Libreville", "Kinshasa", "Bangui", "Luanda"],
        answer: 3

    },
    {
        question: "What is the capital of Ecuador?",
        possibles: ["Quito", "Bogota", "Caracas", "Santiago"],
        answer: 0

    },
    {
        question: "What is the capital of Papua New Guinea?",
        possibles: ["Tabubil", "Lea Lea", "Victoria", "Port Moresby"],
        answer: 3

    },
    {
        question: "What is the capital of Nepal?",
        possibles: ["Bhutan", "Dhaka", "Kathmandu", "Kanpur"],
        answer: 2

    },
    {
        question: "What is the capital of Vietnam?",
        possibles: ["Saigon", "Ho Chi Minh City", "Nha Trang", "Hanoi"],
        answer: 3

    },
    {
        question: "What is the capital of Nigeria?",
        possibles: ["Niamey", "Abuja", "Agadez", "Maradi"],
        answer: 1

    },
 
]



let i = 0;
let numCorrect = 0;
let numIncorrect = 0;
let timer1;
let timer2;
let timer3;
let userChoice;
let userRight;


$(".btn").on("click", initializeGame);

function initializeGame() {
    i=0;
    nextSlide();
    numCorrect = 0;
    numIncorrect = 0;

}



function nextSlide() {

    $(".box").empty();

    let q = $("<h1 class='quest'>").append(questions[i].question);
    let a1 = $("<button class='options' id=0>").append(questions[i].possibles[0]);
    let a2 = $("<button class='options' id=1>").append(questions[i].possibles[1]);
    let a3 = $("<button class='options' id=2>").append(questions[i].possibles[2]);
    let a4 = $("<button class='options' id=3>").append(questions[i].possibles[3]);

    $(".box").append(q);
    $(".box").append(a1);
    $(".box").append(a2);
    $(".box").append(a3);
    $(".box").append(a4);
    timer1 = setTimeout(timeoutPage, 1000);
    
    $(".options").click(function(event) {
        clearTimeout(timer1);
        userChoice = (event.target.id);
        console.log(userChoice);
        
        $(".box").empty();
        console.log(questions[i].answer);
        //show answer screen
    
        if (userChoice==questions[i].answer) {
            console.log("correct!");
            userRight=true;
        }
        else {
            console.log("wrong!");
            userRight=false;
        }
        showAnswer();
    });
}


function timeoutPage() {
    $(".box").empty();
    $(".box").append("<h1>Not fast enough!</h1>")
    numIncorrect++;
    //show timeout answer screen
    if (i<11){
        i++;
        timer2 = setTimeout(nextSlide, 1000);
        console.log(i);
   
    }
    if (i===11) {
        clearTimeout(timer2);
        console.log("Game over!");
        timer3 = setTimeout(finalScreen, 1000);
        
    }
    console.log("Answer Page!");

}

function showAnswer() {
    $(".box").empty();
    //show answer screen
    if (userRight) {
        $(".box").append("<h1>Nice work!</h1>")
        numCorrect++;
    }
    else {
        $(".box").append("<h1>Not even close!</h1>")
        numIncorrect++;
    }

    if (i<11){
        i++;
        timer2 = setTimeout(nextSlide, 1000);
        console.log(i);
    }
    if (i===11) {
        clearTimeout(timer2);
        console.log("Game over!");
        timer3 = setTimeout(finalScreen, 1000);
        
    }
    console.log("Answer Page!");
}


function finalScreen() {
    clearTimeout(timer3);
    $(".box").empty();
    $(".box").append("<h1>Game Over!</h1>")
    $(".box").append("<h1>Number of correct answers: " + numCorrect + "</h1>")
    $(".box").append("<h1>Number of incorrect answers: " + numIncorrect + "</h1>")
}


