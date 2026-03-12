// File Upload Logic
const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.getElementById('file-name');

fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        fileNameDisplay.textContent = `Selected: ${this.files[0].name}`;
    } else {
        fileNameDisplay.textContent = "No file chosen";
    }
});

function handleUpload() {
    if (fileInput.files.length > 0) {
        alert("Resource '" + fileInput.files[0].name + "' has been triggered for upload!");
    } else {
        alert("Please select a file first.");
    }
}

// Simple Mini Game Logic (Clicker)
let score = 0;
const scoreDisplay = document.getElementById('game-score');

function playGame() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Add a little visual flair on click
    scoreDisplay.style.color = "#800020";
    setTimeout(() => {
        scoreDisplay.style.color = "#333";
    }, 100);
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
}
