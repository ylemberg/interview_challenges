const inSortedArray = (arr, target) => {
  let lower = 0
  let upper = arr.length

  while (lower < upper) {
    const mpIdx = Math.ceil(lower + ((upper - lower) / 2))
    const mpVal = arr[mpIdx]

    if (mpVal === target) {
      return true
    } else if (mpVal < target) {
      lower++
    } else {
      upper--
    }
  }

  return false
}

console.log(inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))
console.log(inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
console.log(inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))

console.log(inSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))
console.log(inSortedArray([1, 3, 4, 5], 2))
console.log(inSortedArray([1, 3, 4, 5], -1))
