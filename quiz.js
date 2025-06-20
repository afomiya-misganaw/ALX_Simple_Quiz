// Function to check the user's answer
function checkAnswer() {
    // 1. Define the correct answer
    const correctAnswer = "4";
    
    // 2. Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedRadio.value;
    
    // 3. Compare answers and provide feedback
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// 4. Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["4", "22", "3"],
        correct: "4"
    },
    // Add more questions here
];
let score = 0;
// Update score when answer is correct
score++;
let currentQuestion = 0;
// Add next/previous buttons
