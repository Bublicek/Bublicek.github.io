// Sample correct answers where each index contains an array of valid answers
const correctAnswers = [
    ['Nadal', 'Shelton', "Gasquet",], // Answers for Input 1
    ['Player B'],              // Answer for Input 2
    ['Player C', 'Player Y'], // Answers for Input 3
    ['Player D'],              // Answer for Input 4
    ['Player E'],              // Answer for Input 5
    ['Player F'],              // Answer for Input 6
    ['Player G'],              // Answer for Input 7
    ['Player H'],              // Answer for Input 8
    ['Player I']               // Answer for Input 9
];

const feedback = document.querySelector('.feedback'); // Feedback div
const submitBtn = document.getElementById('submit-btn'); // Submit button

submitBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.input-table input');
    let score = 0; // Initialize score
    let feedbackMessage = '';

    inputs.forEach((input, index) => {
        // Split the input value by commas and trim whitespace
        const userAnswers = input.value.split(',').map(answer => answer.trim());
        const correctSet = new Set(correctAnswers[index]); // Create a set of correct answers for easier checking

        userAnswers.forEach(userAnswer => {
            // Check if the user's answer is in the correct answers
            if (correctSet.has(userAnswer)) {
                score += 10; // Increase score for correct answer
                feedbackMessage += `Correct: ${userAnswer}\n`;
            } else {
                feedbackMessage += `Wrong: ${userAnswer}. Correct options were: ${correctAnswers[index].join(', ')}\n`;
            }
        });
    });

    feedback.textContent = `Score: ${score}\n${feedbackMessage}`;
    feedback.style.display = 'block'; // Show feedback
    // Remove the setTimeout to keep the feedback displayed
});

// Add a reset function to clear inputs and reset the game as needed
function resetGame() {
    const inputs = document.querySelectorAll('.input-table input');
    inputs.forEach(input => {
        input.value = ''; // Clear each input
    });
    feedback.style.display = 'none'; // Hide feedback when resetting
    feedback.textContent = ''; // Clear feedback text
}

// Optional: You can call resetGame() at some point to reset the game manually
