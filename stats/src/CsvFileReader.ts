import fs from "fs"

export class CsvFileReader {
  data: string[][] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((line): string[] => line.split(","))
  }
}
