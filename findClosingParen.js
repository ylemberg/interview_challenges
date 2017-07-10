const closingParenIdx = (str, openingIdx) => {
  let numOfClosedParensNeeded = 1

  for (let i = openingIdx + 1; i < str.length; i++) {
    if (str[i] === ')') {
      numOfClosedParensNeeded--
    } else if (str[i] === '(') {
      numOfClosedParensNeeded++
    }

    if (numOfClosedParensNeeded === 0) {
      return i
    }
  }
}

console.log(closingParenIdx('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10))
