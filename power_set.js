const powerSet = str => {
  let sets = [''];
  [...str]
    .sort()
    .reduce((strArr, letter) => !strArr.includes(letter) ? strArr.concat(letter) : strArr, [])
    .forEach(letter => {
      sets = sets.concat(sets.map(aSet => aSet + letter))
    })

  return sets.sort()
}
console.log(powerSet('ab'))
console.log(powerSet('abc'))
console.log(powerSet('abcd'))