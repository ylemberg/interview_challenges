// Reference: https://www.interviewcake.com/question/javascript/permutation-palindrome

const permutationPalindrome = str => {
  const letters = {}
  let oddFound = false

  for (let i = 0; i < str.length; i++) {
    letters[str[i]] = letters[str[i]] ? !letters[str[i]] : true
  }

  for (const letter in letters) {
    if (letters[letter] && !oddFound) {
      oddFound = true
    } else if (letters[letter] && oddFound) {
      return false
    }
  }

  return true
}

console.log(permutationPalindrome('civic'))
console.log(permutationPalindrome('tom'))
console.log(permutationPalindrome('ivicc'))
console.log(permutationPalindrome('civil'))
console.log(permutationPalindrome('livci'))
console.log(permutationPalindrome('racecar'))
console.log(permutationPalindrome('arcacer'))
