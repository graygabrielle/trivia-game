let questions = [
    {
        question: "What color is the sky?",
        possibles: ["blue", "green", "purple"],
        answer: "blue"
    }
]

console.log("working!");

// document.getElementById("question").textContent = questions[0].question;

$("#question").html(questions[0].possibles.join(", "));
$("#question").append("<p>" + questions[0].answer + "</p>");
$("#question").prepend("<p>" + questions[0].question + "</p>");
