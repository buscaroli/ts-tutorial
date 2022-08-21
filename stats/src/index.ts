import { MatchReader, MatchData } from "./MatchReader"
import { CsvFileReader } from "./CsvFileReader"
import { Outcome } from "./Outcome"

// check if the given team won the match
const isWinner = (team: string, match: MatchData): boolean => {
  const winner: Outcome = match[5] as Outcome
  const homeTeam = match[1] // team playing at Home
  const awayTeam = match[2] // team playing Away
  return (
    (homeTeam === team && winner === Outcome.HomeWin) ||
    (awayTeam === team && winner === Outcome.AwayWin)
  )
}
// Create an object that satisfies the DataReader interface
const reader = new CsvFileReader("football.csv")

// Create an instance of MatchReader passing it an object that satisfies the DataReader interface
const matchesReader = new MatchReader(reader)
matchesReader.load()

// count how many times the given team has won a game
const manchesterUnitedWins: number = matchesReader.matches.filter(
  (match: MatchData) => isWinner("Man United", match)
).length

console.log(manchesterUnitedWins)
console.log(reader.data[1])
