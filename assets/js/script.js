document.addEventListener('DOMContentLoaded', function () {
    // set qnum to access index in quizQuestions array
    let qnum = 0;
    // set correctNum as number of questions answered correctly
    let correctNum = 0;
    // set incorrectNum as number of questions answered incorrectly
    let incorrectNum = 0;
        
    const quizQuestions = [
    {
        question: "What is the UK currency?",
        options: {
            a: "Euro",
            b: "Dollar",
            c: "Pound",
            d: "Ruble"
        },
        correctAnswer: "c",
        category: "law", // add category to question: history, geography, law, culture
        imageURL: "assets/images/coins.webp",
        imageAlt: "Some coins and notes",
        incorrectFeedback: "The pound sterling, commonly known as the pound, is the official currency of the United Kingdom and is symbolised by £ with the currency code GBP."
    },
    {
        question: "Where in Scotland is known as the home of golf?",
        options: {
            a: "Glasgow",
            b: "Edinburgh",
            c: "St Andrew's",
            d: "Aberdeen"
        },
        correctAnswer: "c",
        imageURL: "assets/images/golf.webp",
        imageAlt: "A golf ball on a tee",
        incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
    }

];
// event listener for nextQuestionButton
document.getElementById('nextButton').addEventListener("click",nextQuestion);

// displays the next question
function nextQuestion(){
    qnum++;
    buildQuiz();

}

// submit answer
function submitAnswer(){
    // check if userAnswer matches correctAnswer in quizQuestions array
    // correctNum++
    // else incorrectNum++
}

// build the quiz page for a specific question in the quizQuestions array
function buildQuiz(){
    // add question number (= qnum index+1) to Quiz page
    let questionNumberSpan = document.getElementById('questionNum');
    questionNumberSpan.innerText = parseInt(qnum+1);
    // add question text to Quiz page
    let questionTextElement = document.getElementById('questionText');
    questionTextElement.innerText = quizQuestions[qnum].question;
    // add question image and alt tag to Quiz page
    let imageElement = document.getElementById('questionImage');
    imageElement.src = quizQuestions[qnum].imageURL;
    imageElement.alt = quizQuestions[qnum].imageAlt;
    imageElement.width = "300"; //move width setting to css
    // add answer options to Quiz page
    let options = quizQuestions[qnum].options;
    let optionsArray = Object.keys(options);
    let optionSetDiv = document.getElementById('optionSet');
    let optionSet ="";
    for (let option of optionsArray) {
        optionSet += `<div><input type='radio'>${option}) ${options[option]}</input></div>`;
    }
    optionSetDiv.innerHTML = optionSet;
}

    buildQuiz();
});