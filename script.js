document.addEventListener('DOMContentLoaded', () => {
    
    // --- FILE UPLOAD LOGIC ---
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileStatus = document.getElementById('fileStatus');

    uploadBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            fileStatus.innerText = `Preparing to process: ${fileInput.files[0].name}`;
        }
    });

    // --- REFLEX GAME LOGIC ---
    let score = 0;
    let isActive = false;
    const target = document.getElementById('target');
    const gameArea = document.getElementById('game-area');
    const scoreDisplay = document.getElementById('score');
    const startBtn = document.getElementById('startBtn');

    function moveTarget() {
        if (!isActive) return;

        const maxX = gameArea.clientWidth - 50;
        const maxY = gameArea.clientHeight - 50;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
        target.style.display = 'block';
    }

    startBtn.addEventListener('click', () => {
        score = 0;
        isActive = true;
        scoreDisplay.innerText = score;
        startBtn.innerText = "System Active";
        moveTarget();
    });

    target.addEventListener('mousedown', (e) => {
        e.stopPropagation(); // Prevents clicking the gameArea (Game Over)
        if (isActive) {
            score++;
            scoreDisplay.innerText = score;
            moveTarget();
        }
    });

    gameArea.addEventListener('mousedown', () => {
        if (isActive) {
            alert(`Link Terminated. Final Score: ${score}`);
            isActive = false;
            target.style.display = 'none';
            startBtn.innerText = "Restart System";
        }
    });
});
