let questions = [
    {
        question: "Which is NOT a datatype?",
        options: ["String", "Number", "Boolean", "Table"],
        correct: 3
    },
    {
        question: "JavaScript is?",
        options: ["Language", "Library", "Framework", "Database"],
        correct: 0
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsForm = document.getElementById("optionsForm");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

loadQuestion();

function loadQuestion() {
    const currentQ = questions[currentIndex];

    questionEl.textContent = currentQ.question;
    optionsForm.innerHTML = "";

    currentQ.options.forEach(function (opt, index) {
        const label = document.createElement("label");

        label.innerHTML = `
      <input type="radio" name="option" value="${index}">
      ${opt}
    `;

        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement("br"));
    });
}

nextBtn.addEventListener("click", function () {
    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an option");
        return;
    }

    const selectedIndex = Number(selected.value);
    const correctIndex = questions[currentIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quizBox").style.display = "none";
    resultEl.textContent = "Your Score: " + score + " / " + questions.length;
}