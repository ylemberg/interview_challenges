// Reference to problem: https://challenge.makerpass.com/c/b91ba11941a214e41b2da9a07b57c233

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
