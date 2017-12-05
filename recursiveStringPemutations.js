// Reference: https://www.interviewcake.com/question/javascript/recursive-string-permutations

const generatePerm = str => {
  if (str.length <= 1) {
    return [str]
  }

  const perms = []

  for (let i = 0; i < str.length; i++) {
    const tempPerms = generatePerm(str.substr(0, i).concat(str.substr(i + 1)))
    for (let j = 0; j < tempPerms.length; j++) {
      perms.push(str[i] + tempPerms[j])
    }
  }

  return perms
}

console.log(generatePerm('tom'))
console.log(generatePerm('at'))
console.log(generatePerm('t'))
console.log(generatePerm(''))
console.log(generatePerm('rake'))
