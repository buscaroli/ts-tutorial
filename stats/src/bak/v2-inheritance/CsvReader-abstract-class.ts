import fs from "fs"
import { Outcome } from "./Outcome"

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((line): string[] => line.split(","))
      .map(this.mapRow)
  }
}
