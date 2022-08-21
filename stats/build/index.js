"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
// Home | Away | Draw
var Outcome;
(function (Outcome) {
    Outcome["HomeWin"] = "H";
    Outcome["AwayWin"] = "A";
    Outcome["Draw"] = "D";
})(Outcome || (Outcome = {}));
// check if the given team won the match
const isWinner = (team, match) => {
    const winner = match[5];
    const homeTeam = match[1]; // team playing at Home
    const awayTeam = match[2]; // team playing Away
    return ((homeTeam === team && winner === Outcome.HomeWin) ||
        (awayTeam === team && winner === Outcome.AwayWin));
};
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
// count how many times the given team has won a game
const manchesterUnitedWins = reader.data.filter((match) => isWinner("Man United", match)).length;
console.log(manchesterUnitedWins);
