document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DONGHYUN'S UPLOAD LOGIC
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileStatus = document.getElementById('fileStatus');

    uploadBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            fileStatus.innerHTML = `Linked Asset:<br><strong>${fileInput.files[0].name}</strong>`;
            fileStatus.style.color = "var(--burgundy)";
        }
    });

    // 2. REFLEX GAME LOGIC
    let score = 0;
    let isActive = false;
    const target = document.getElementById('target');
    const canvas = document.getElementById('game-canvas');
    const scoreDisplay = document.getElementById('score');
    const startBtn = document.getElementById('startBtn');

    function spawnTarget() {
        if (!isActive) return;
        const x = Math.random() * (canvas.clientWidth - 40);
        const y = Math.random() * (canvas.clientHeight - 40);
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
        target.style.display = 'block';
    }

    startBtn.addEventListener('click', () => {
        score = 0;
        isActive = true;
        scoreDisplay.innerText = "SCORE: 00";
        startBtn.innerText = "SYSTEM ACTIVE";
        spawnTarget();
    });

    target.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        if (isActive) {
            score++;
            scoreDisplay.innerText = `SCORE: ${score < 10 ? '0' + score : score}`;
            spawnTarget();
        }
    });

    canvas.addEventListener('mousedown', () => {
        if (isActive) {
            isActive = false;
            target.style.display = 'none';
            startBtn.innerText = "RE-INITIALIZE";
            alert(`Link Broken. Data points collected: ${score}`);
        }
    });
});
