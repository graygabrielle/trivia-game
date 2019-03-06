

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
let q = $("<p>" + questions[i].question + "</p>");
let a1 = $("<p>" + questions[i].possibles[0] + "</p>");
let a2 = $("<p>" + questions[i].possibles[1] + "</p>");
let a3 = $("<p>" + questions[i].possibles[2] + "</p>");
let a4 = $("<p>" + questions[i].possibles[3] + "</p>");



$(".btn").on("click", initializeGame);

function initializeGame() {
    $(".box").empty();
    setTimeout(timer, 1000);
    
}

function timer() {
    $(".box").html(q);
    $(".box").append(a1);
    $(".box").append(a2);
    $(".box").append(a3);
    $(".box").append(a4);
    i++;
    setTimeout(timer, 3000)

}