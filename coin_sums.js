// Reference: https://challenge.makerpass.com/c/7174ea4bdfdfdf835b54bedebc6d5803
// Reference: https://www.interviewcake.com/question/javascript/coin

const coinSums = val => {
  const results = []

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < val; j++) {
      if (i === 0) {
        results.push(1)
      } else if (coins[i] === j + 1){
        results[j] += 1
      } else if (coins[i] < j + 1){
        results[j] += results[j - coins[i]]
      }
    }
  }

  return results[results.length - 1]
}