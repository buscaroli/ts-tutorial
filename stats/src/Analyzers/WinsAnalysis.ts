import { Analyzer } from "../Summary"
import { MatchData } from "../MatchData"
import { Outcome } from "../Outcome"

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

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    return matches
      .filter((match: MatchData) => isWinner(this.team, match))
      .length.toString()
  }
}
