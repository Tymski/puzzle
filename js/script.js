timePerPuzzle = 1000 * 60 * 5;
elapsedTime = 0;

setTimeout(() => {
    setInterval(() => {
        timeBar.style.width = 100 - (elapsedTime * 100 / timePerPuzzle) + "%";
        elapsedTime += 200;
    }, 200)
}, 200);

setTimeout(() => {
    location.reload();
}, timePerPuzzle + 200);