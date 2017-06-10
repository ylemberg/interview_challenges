// Reference: https://repl.it/student/submissions/1108302

const findPivot = arr => {
  let prev = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && typeof prev === 'string' && arr[i][0].charCodeAt() < prev.charCodeAt()) {
      return i
    } else if (typeof arr[i] === 'string') {
      prev = arr[i]
    }
  }

  return null
}

console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']))
console.log(findPivot(['dog', 'eagle', 2, 'falcon', 'apple', 'bear', 'cat']))
console.log(findPivot([2, 'falcon', 'apple', 'bear', 'cat', 'dog', 'eagle']))
console.log(findPivot([2, 3, true, 'six', 'zsh', 'abc']))
