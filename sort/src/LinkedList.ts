import { Sorter } from "./Sorter"

class Node {
  next: Node | null = null
  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null
  length: number = 0

  add(num: number): void {
    const newNode = new Node(num)

    if (!this.head) {
      this.head = newNode
    } else {
      let cursor = this.head
      while (cursor.next) {
        cursor = cursor.next
      }
      cursor.next = newNode
    }
    this.length++
  }

  at(idx: number): Node {
    if (!this.head) {
      throw new Error("LinkedList is emmpty.")
    }
    let counter = 0
    let currentNode: Node | null = this.head

    while (currentNode) {
      if (counter === idx) return currentNode
      counter++
      currentNode = currentNode.next
    }
    throw new Error("Index out of bounds.")
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) {
      throw new Error("List is empty")
    }
    return this.at(leftIdx).value > this.at(rightIdx).value
  }
  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx)
    const rightNode = this.at(rightIdx)
    const temp = leftNode.value
    leftNode.value = rightNode.value
    rightNode.value = temp
  }

  print(): void {
    const list: number[] = []
    if (!this.head) {
      return console.log(list)
    }

    let currentNode: Node | null = this.head

    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(list)
  }
}
