import { CharectersCollection } from "./CharactersCollection"
import { NumbersCollection } from "./NumbersCollection"
import { LinkedList } from "./LinkedList"

const nums = new NumbersCollection([3, 7, -2, 10])
console.log("\n")
nums.sort()
console.log(nums.data)

const letters = new CharectersCollection("adCTgbzFZ")
letters.sort()
console.log("\n")
console.log(letters.data)

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(8)
linkedList.add(-3)
linkedList.add(10)
linkedList.sort()
console.log("\n")
linkedList.print()
