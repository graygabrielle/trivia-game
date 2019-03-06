

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

function initializeGame() {
    $(".box").empty();
}

$(".btn").on("click", initializeGame);



// $(".instructions").html(questions[1].question);
// $("#question").append("<p>" + questions[0].answer + "</p>");
// $("#question").prepend("<p>" + questions[0].question + "</p>");