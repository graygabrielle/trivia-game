

let questions = [
    {
        question: "What is the capital of Armenia?",
        possibles: ["Yerevan", "Sisian", "Tbilisi", "Baku"],
        answer: "Yerevan"

    },
    {
        question: "What is the capital of Kazakhstan?",
        possibles: ["Baku", "Astana", "Karagandy", "Omsk"],
        answer: "Astana"

    },
    {
        question: "What is the capital of Finland?",
        possibles: ["Stockholm", "Oslo", "Helsinki", "Copenhagen"],
        answer: "Helsinki"

    },
    {
        question: "What is the capital of Turkey?",
        possibles: ["Ankara", "Istanbul", "Antalya", "Izmir"],
        answer: "Ankara"

    },
    {
        question: "What is the capital of Slovakia?",
        possibles: ["Ljubljana", "Zagreb", "Bratislava", "Sarajevo"],
        answer: "Bratislava"

    },
    {
        question: "What is the capital of Angola?",
        possibles: ["Libreville", "Kinshasa", "Bangui", "Luanda"],
        answer: "Luanda"

    },
    {
        question: "What is the capital of Ecuador?",
        possibles: ["Quito", "Bogota", "Caracas", "Santiago"],
        answer: "Quito"

    },
    {
        question: "What is the capital of Papua New Guinea?",
        possibles: ["Tabubil", "Lea Lea", "Victoria", "Port Moresby"],
        answer: "Port Moresby"

    },
    {
        question: "What is the capital of Nepal?",
        possibles: ["Bhutan", "Dhaka", "Kathmandu", "Kanpur"],
        answer: "Kathmandu"

    },
    {
        question: "What is the capital of Vietnam?",
        possibles: ["Saigon", "Ho Chi Minh City", "Nha Trang", "Hanoi"],
        answer: "Hanoi"

    },
    {
        question: "What is the capital of Nigeria?",
        possibles: ["Niamey", "Abuja", "Agadez", "Maradi"],
        answer: "Abuja"

    },
 
]



let i = 0;
let correct = 0;
let incorrect = 0;
let timer1;
let timer2;


$(".btn").on("click", initializeGame);

function initializeGame() {
    i=0;
    nextSlide();
    correct = 0;
    incorrect = 0;

}



function nextSlide() {

    $(".box").empty();

    let q = $("<h1 class='quest'>").append(questions[i].question);
    let a1 = $("<button class='options'>").append(questions[i].possibles[0]);
    let a2 = $("<button class='options'>").append(questions[i].possibles[1]);
    let a3 = $("<button class='options'>").append(questions[i].possibles[2]);
    let a4 = $("<button class='options'>").append(questions[i].possibles[3]);

    $(".box").append(q);
    $(".box").append(a1);
    $(".box").append(a2);
    $(".box").append(a3);
    $(".box").append(a4);
    timer1 = setTimeout(answerPage, 500);
    
}

function answerPage() {
    $(".box").empty();
    if (i<=10){
        i++;
        timer2 = setTimeout(nextSlide, 500);
        console.log(i);
    }
    if (i===11) {
        clearTimeout(timer2);
        console.log("Game over!");
        
    }
    console.log("Answer Page!");

}

    // $(".options").on("click", function(){
    //     let userChoice = $("this");
    //     console.log(userChoice);
    // });


// function timer() {

//         let q = $("<h1 class='quest'>").append(questions[i].question);
//         let a1 = $("<button class='options'>").append(questions[i].possibles[0]);
//         let a2 = $("<button class='options'>").append(questions[i].possibles[1]);
//         let a3 = $("<button class='options'>").append(questions[i].possibles[2]);
//         let a4 = $("<button class='options'>").append(questions[i].possibles[3]);
    
//         $(".box").empty();
//         $(".box").append(q);
//         $(".box").append(a1);
//         $(".box").append(a2);
//         $(".box").append(a3);
//         $(".box").append(a4);
//         i++;
//         if (i===11) {
//             clearInterval(timer);
//         }
//         setInterval(timer, 1000);
//     }



    // $(".options").on("click", function(){
    //     let userChoice = $("this");
    //     console.log(userChoice);
    // });

