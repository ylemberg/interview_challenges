const findRotationPoint = arr => {
  let lower = 0
  let upper = arr.length
  const first = arr[0]

  while (lower < upper) {
    const mpIdx = lower + Math.floor((upper - lower) / 2)
    const mpVal = arr[mpIdx]

    if (first > mpVal) {
      upper = mpIdx
    } else {
      lower = mpIdx
    }

    if (arr[mpIdx - 1] > mpVal && arr[mpIdx + 1] > mpVal) {
      return mpIdx
    } else if (mpIdx === arr.length - 1 && arr[mpIdx - 1] > mpVal) {
      return mpIdx
    } else if (mpIdx === arr.length - 1 && arr[mpIdx - 1] < mpVal) {
      return 0
    }
  }
}

console.log(findRotationPoint(['r', 's', 't', 'w', 'z', 'c', 'd', 'p']))
console.log(findRotationPoint(['r', 'a', 'c', 'd']))
console.log(findRotationPoint(['r', 'x', 'a', 'd']))
console.log(findRotationPoint(['x', 'y', 'z', 'a']))
console.log(findRotationPoint(['x', 'a']))
console.log(findRotationPoint(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']))
console.log(findRotationPoint(['a', 'b', 'c', 'd', 'e']))
