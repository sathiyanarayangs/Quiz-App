const quizData=[
    {
        question: "Which is the capital of India?",
        a:"Mumbai",
        b:"New Delhi",
        c:"Chennai",
        d:"Kolkata",
        correct:'b'
    },{
        question: "Who is the Prime Minister of India?",
        a:"MK Stalin",
        b:"Rahul Gandhi",
        c:"Narendra Modi",
        d:"Nirmala Seetaraman",
        correct:'c'
    }
    ,{
        question: "Who is the Father of our Nation?",
        a:"Dr. Rajendra Prasad",
        b:"Mahatma Gandhi",
        c:"Dr. B. R. Ambedkar",
        d:"Jawaharlal Nehru",
        correct:'b'
    },{
        question: "Brain of computer is?",
        a:"Monitor",
        b:"Keyboard",
        c:"CPU",
        d:"Mouse",
        correct:'c'
    }
    ,{
        question: "Smallest state of India is?",
        a:"Tamil Nadu",
        b:"Karnataka",
        c:"Kerala",
        d:"Goa",
        correct:'d'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
            `<h2>&nbsp;&nbsp;You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});