import { MatchReader, MatchData } from "./MatchReader"
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

const reader = new MatchReader("football.csv")
reader.read()

// count how many times the given team has won a game
const manchesterUnitedWins: number = reader.data.filter((match) =>
  isWinner("Man United", match)
).length

console.log(manchesterUnitedWins)
console.log(reader.data[1])
