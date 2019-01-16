const rp = require("request-promise");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const baseUrl = "https://lichess.org/training/";

async function logFen(puzzleID) {
    let result = await rp(baseUrl + puzzleID)
        .then(function(html) {
            const dom = new JSDOM(html, {
                runScripts: "dangerously",
                pretendToBeVisual: true
            });
            var puzzle = dom.window.lichess.puzzle.data;
            var length = puzzle.puzzle.initialPly;
            var fen = puzzle.game.treeParts[length].fen;
            console.log(fen);
        })
        .catch(function(err) {
            console.log(err);
        });
    return result;
}

function sleep(ms) {
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
}

var iterator = 1673;
async function callSequence() {
    while (true) {
        await logFen(iterator++);
        await sleep(20000);
    }
}

callSequence();
