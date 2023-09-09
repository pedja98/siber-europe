const lst1 = [1, 8, 15, 16, 35]
const lst2 = [2, 7, 12, 63]
const lst3 = [10, 13, 14, 42]

let unionIndex = 0

let lst1Index = 0
let lst2Index = 0
let lst3Index = 0

const GetNext = () => {
  let nextElement = undefined

  while (nextElement === undefined) {
    const findMinElements = [lst1[lst1Index], lst2[lst2Index], lst3[lst3Index]].filter((elem) => elem)
    if (findMinElements.length === 0) {
      return undefined
    }

    const minElement = Math.min(...findMinElements)

    if (minElement === lst1[lst1Index]) {
      lst1Index++
    } else if (minElement === lst2[lst2Index]) {
      lst2Index++
    } else if (minElement === lst3[lst3Index]) {
      lst3Index++
    }

    if (unionIndex % 2 === 0 && minElement % 2 === 0) {
      continue
    } else if (unionIndex % 2 !== 0 && minElement % 2 !== 0) {
      continue
    }

    unionIndex++
    nextElement = minElement
  }

  return nextElement
}
