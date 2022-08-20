import { Sorter } from "./Sorter"

export class CharectersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
  }

  swap(leftIdx: number, rightIdx: number): void {
    const swappedString =
      this.data.slice(0, leftIdx) +
      this.data[rightIdx] +
      this.data[leftIdx] +
      this.data.slice(leftIdx + 2)

    this.data = swappedString
  }
}
