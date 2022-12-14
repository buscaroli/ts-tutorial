import { dateStringtoDate } from "./utils"
import { Outcome } from "./Outcome"
import { MatchData } from "./MatchData"
import { CsvFileReader } from "./CsvFileReader"

interface DataReader {
  read(): void
  data: string[][]
}

// MatchReader will be instantiated passing an object that satisfies the DataReader interface
export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename))
  }

  matches: MatchData[] = []
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
