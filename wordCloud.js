// Reference: https://www.interviewcake.com/question/javascript/word-cloud

const getWordCloud = str => {
  const cloud = new Map()
  const closingPuncs = {
    '.': true,
    ':': true,
    ',': true,
    '?': true,
    '!': true,
    '\'': true,
    '(': true,
    ')': true
  }
  const nonChars = {
    '\t': true,
    '\n': true,
    ' ': true
  }
  Object.assign(nonChars, closingPuncs)
  let startOfSentence = true

  for (let i = 0; i < str.length;) {
    let wordStartsSentence = false
    let word = str[i]
    if (word.toUpperCase() === word && !nonChars[word] && startOfSentence) {
      wordStartsSentence = true
    }

    i++
    let foundEndOfWord = false
    while (!foundEndOfWord) {
      if (nonChars[str[i]] || i === str.length) {
        foundEndOfWord = true
      } else {
        word += str[i]
        i++
      }
    }

    if (wordStartsSentence) {
      word = word.toLowerCase()
    }

    if (cloud.get(word)) {
      cloud.set(word, cloud.get(word) + 1)
    } else {
      cloud.set(word, 1)
    }

    startOfSentence = str[i] === '.' ? true : false
    while (nonChars[str[i]]) {
      i++
    }
  }

  return cloud
}

console.log(getWordCloud('After beating the eggs, Dana read the next step: \nAdd milk and eggs. then add flour and sugar.'))
console.log(getWordCloud('We came, we saw, we conquered...then we ate Bill\'s (Mille-Feuille) cake. \nThe bill came to five dollars.'))
