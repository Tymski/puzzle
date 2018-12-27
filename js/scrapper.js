const rp = require('request-promise');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

const url = 'https://lichess.org/training/1';

rp(url)
    .then(function (html) {
        const dom = new JSDOM(html, {
            runScripts: "dangerously",
            pretendToBeVisual: true
        });
        var puzzle = dom.window.lichess.puzzle.data
        var length = puzzle.puzzle.initialPly
        var fen = puzzle.game.treeParts[length].fen;
        console.log(fen);
    })
    .catch(function (err) {
        console.log(err);
    });