import fs from "fs"
import { dateStringtoDate } from "./utils"
import { Outcome } from "./Outcome"

type MatchData = [Date, string, string, number, number, Outcome, string]

export class CsvFileReader {
  data: MatchData[] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((line): string[] => line.split(","))
      .map((row: string[]): MatchData => {
        return [
          dateStringtoDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as Outcome,
          row[6],
        ]
      })
  }
}
