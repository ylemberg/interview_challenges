// Reference: https://www.interviewcake.com/question/javascript/bracket-validator?

const validBrackets = str => {
  const validOpeners = {
    '{': true,
    '(': true,
    '[': true
  }
  const validClosers = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  const openers = []

  for (let i = 0; i < str.length; i++) {
    if (validOpeners[str[i]]) {
      openers.push(str[i])
    } else if (validClosers[str[i]] && openers[openers.length - 1] !== validClosers[str[i]]) {
      return false
    } else if (validClosers[str[i]] && openers[openers.length - 1] === validClosers[str[i]]) {
      openers.pop()
    }
  }

  return !openers.length
}

console.log(validBrackets('{ [ ] ( ) }'))
console.log(validBrackets('{ [ ( ] ) }'))
console.log(validBrackets('(((({[([[[[((()))]]]])]}))))'))
console.log(validBrackets('('))
console.log(validBrackets(''))
console.log(validBrackets('}'))
console.log(validBrackets('{ [ }'))
console.log(validBrackets('{ [ ( ] ) }'))
