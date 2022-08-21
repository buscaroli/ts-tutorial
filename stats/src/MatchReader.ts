import { CsvFileReader } from "./CsvFileReader"
import { Outcome } from "./Outcome"
import { dateStringtoDate } from "./utils"

export type MatchData = [Date, string, string, number, number, Outcome, string]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringtoDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as Outcome,
      row[6],
    ]
  }
}
