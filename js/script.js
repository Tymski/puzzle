// Timing stuff
timePerPuzzle = 1000 * 60 * 3.5;
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

// board stuff
var fen = getFen();

color = fen.split(" ")[1];
if (color == "w") {
    color = "white";
}
if (color == "b") {
    color = "black";
    colorElement.innerHTML = "Black to move";
    colorElement.classList.add("black");
    titleElement.classList.add("black");
}

orientation = 'white';
var cfg = {
    position: fen,
    orientation: color
};
var board = ChessBoard('board', cfg);