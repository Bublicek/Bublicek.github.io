// Define the correct answers based on row and column criteria for each cell
const correctAnswers = {
    "cell-1-1": ["Nadal"],    // Example: Left-handed players winners of 1000 masters
    "cell-1-2": ["Nadal", "Djokovic", "Thiem", "Medvedev", "Alcaraz", "Sinner", "Wawrinka", "Cilic"], // Example: Grand slam winner, 1000 masters winner
    "cell-1-3": ["Zverev"],              // Example: German winners of 1000 masters
    "cell-2-1": ["Humbert", "Draper", "Shelton", "Tabilo", "Shang", "Mannarino", "Norrie", "Acosta", "Moutet", "Nishioka", "Gaston", "Koepfer", "Monteiro"],              // Example: Left-handed top 100, both-handed BH
    "cell-2-2": ["Djokovic", "Thiem", "Medvedev", "Alcaraz", "Sinner", "Wawrinka", "Cilic"],           // Example: GS winner, both-hands BH
    "cell-2-3": ["Zverev", "Struff", "Koepfer", "Hanfmann"],               // Example: German, both-hands BH
    "cell-3-1": ["Humbert", "Draper", "Shelton", "Tabilo", "Shang", "Mannarino", "Norrie", "Acosta", "Moutet", "Nishioka", "Shapovalov", "Gaston", "Koepfer", "Monteiro" ],           // Example: Current top 100, left-handed
    "cell-3-2": ["Djokovic", "Medvedev", "Alcaraz", "Sinner"],               // Example: Current top 100, GS winner
    "cell-3-3": ["Zverev", "Struff", "Koepfer", "Hanfmann", "Altmaier"]       // Example: Current top 100, German
};

// Feedback div
const feedback = document.querySelector('.feedback');
const submitBtn = document.getElementById('submit-btn');

// Event listener for Submit button
submitBtn.addEventListener('click', () => {
    let feedbackMessage = '';
    let score = 0;

    // Loop through each cell to check the player’s answer
    document.querySelectorAll('.cell').forEach(cell => {
        const cellId = cell.id;
        const answer = cell.value.trim(); // Get the answer typed in by the player

        // Check if the answer is in the list of correct answers for that cell
        if (correctAnswers[cellId].includes(answer)) {
            feedbackMessage += `Cell ${cellId}: Correct! "${answer}"\n`;
            score++;
        } else {
            feedbackMessage += `Cell ${cellId}: Incorrect. Try again.\n`;
        }
    });

    feedback.textContent = `Score: ${score} / 9\n${feedbackMessage}`;
    feedback.style.display = 'block';
});
