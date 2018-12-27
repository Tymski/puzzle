// Timing stuff
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

// board stuff
fen = '8/8/6Rp/1ppPk3/p3Pp2/2P1nP2/P6P/2K5 w - - 2 46';

color = fen.split(" ")[1];
if (color == "w") color = "white";
if (color == "b") color = "black";

orientation = 'white';
var cfg = {
    position: fen,
    orientation: color
};
var board = ChessBoard('board', cfg);