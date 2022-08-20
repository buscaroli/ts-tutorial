export abstract class Sorter {
  abstract compare(leftIdx: number, rightIdx: number): boolean
  abstract swap(leftIdx: number, rightIdx: number): void
  abstract length: number
  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) this.swap(j, j + 1)
      }
    }
  }
}
