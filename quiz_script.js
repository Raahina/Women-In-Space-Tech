const questions = [
    {
        question: "What is the primary function of the Life Support System in a spacecraft?",
        answers: [
            { text: "To generate thrust for maneuvering", correct: false },
            { text: "To maintain oxygen levels and remove carbon dioxide", correct: true },
            { text: "To regulate the spacecraft's temperature", correct: false },
            { text: "To transmit data to ground control", correct: false },
        ]
    },
    {
        question: "Which system is responsible for ensuring the spacecraft follows its intended trajectory?",
        answers: [
            { text: "Thermal Control System", correct: false },
            { text: "Navigation System", correct: true },
            { text: "Power Supply System", correct: false },
            { text: "Communication System", correct: false },
        ]
    },
    {
        question: "What is a major risk associated with space debris and micrometeoroids?",
        answers: [
            { text: "Radiation exposure", correct: false },
            { text: "Equipment malfunction", correct: false },
            { text: "Impact damage to the spacecraft", correct: true },
            { text: "Thermal extremes", correct: false },
        ]
    },
    {
        question: "How does the Power Supply System contribute to spacecraft safety?",
        answers: [
            { text: "By providing electrical power to all systems and instruments", correct: false },
            { text: "By regulating the spacecraft’s temperature", correct: false },
            { text: "By maintaining communication with ground control", correct: true },
            { text: "By conducting scientific experiments", correct: false },
        ]
    },
    {
        question: "What is the purpose of the Thermal Control System?",
        answers: [
            { text: "To support the spacecraft’s structural framework", correct: false },
            { text: "To generate and distribute electrical power", correct: false },
            { text: "To manage heat dissipation and insulation", correct: true },
            { text: "To maintain oxygen levels", correct: false },
        ]
    },
    {
        question: "What safety measure helps protect astronauts from radiation exposure in space?",
        answers: [
            { text: "Implementing exercise routines", correct: false },
            { text: "Using multiple communication channels", correct: true },
            { text: "Regular equipment maintenance", correct: false },
            { text: "Using radiation shielding materials", correct: false },
        ]
    },
    {
        question: "What should be done to address the risk of equipment failure?",
        answers: [
            { text: "Implement thermal control systems", correct: false },
            { text: "Design redundant systems and perform maintenance checks", correct: true },
            { text: "Use fire suppression systems", correct: false },
            { text: "Track and avoid space debris", correct: false },
        ]
    },
    {
        question: "What is one effect of prolonged exposure to microgravity?",
        answers: [
            { text: "Health effects on astronauts", correct: false },
            { text: "Damage from micrometeoroids", correct: false },
            { text: "Increased radiation levels", correct: true },
            { text: "Loss of communication", correct: false },
        ]
    },
    {
        question: "How can spacecraft communicate with ground control in case of a primary communication system failure?",
        answers: [
            { text: "By using redundant systems", correct: true },
            { text: "By implementing thermal control measures", correct: false },
            { text: "By conducting scientific experiments", correct: false },
            { text: "By generating additional power", correct: false },
        ]
    },
    {
        question: "What does the Structural Framework of a spacecraft do?",
        answers: [
            { text: "Regulates temperature", correct: false },
            { text: "Provides electrical power", correct: false },
            { text: "Supports and protects spacecraft components and crew", correct: true },
            { text: "Maintains oxygen levels", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
