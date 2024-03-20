const quizData = [
    {
        question: "What is the capital of france?",
        a: "London",
        b: "Berlin",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },

     {
        question: "What technology company launched a new self driving car?",
        a: "apple",
        b: "google",
        c: "Tesla",
        d: "microsoft",
        correct: "c", 
    },
    
    {
        question : "If all doggs are mammals and all mammals are warm blooded, what can you conclude?",
        a: "all warm-blooded animals are dogs",
        b: "no dogs are warm blooded",
        c: "not all mammals are warm blooded",
        d: "all dogs are warm blooded",
        correct: "d",
    },
    
    {
        question: "Who is the lead singer of the band coldplay?",
        a: "chris martin",
        b: "bruno mars",
        c: "justin bieber",
        d: "Ed sheeran",
        correct: "d",
    }, 
    
    {
        question: "what's the antonym of happy?",
        a: "joyful",
        b: "excited",
        c: "sad",
        d: "content",
        correct: "b",
    }
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
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

    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

function deselectAnswers() {
    answerEl.forEach(answerEl => {
        answerEl.checked = false;

    });
}


submitBtn.addEventListener('click', () => {

   const answer =  getSelected();

   if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>you answered correctly
         at ${score}/${quizData.length} questions</h2>
         
         <button onclick = "location.reload();">Reload</button>`;
    }
   }

   


});