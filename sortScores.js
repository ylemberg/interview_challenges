// Reference: https://www.interviewcake.com/question/javascript/top-scores

const sortScores = (scores, highestScore) => {
  const storage = new Array(highestScore)
  const result = []

  for (let i = 0; i < scores.length; i++) {
    storage[scores[i]] = storage[scores[i]] ? ++storage[scores[i]] : 1
  }

  for (let i = storage.length; i >= 0; i--) {
    for (let j = 0; j < storage[i]; j++) {
      result.push(i)
    }
  }

  return result
}

console.log(sortScores([37, 89, 41, 65, 91, 53], 100))
