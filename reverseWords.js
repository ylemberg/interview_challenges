// Reference: https://www.interviewcake.com/question/javascript/reverse-words

const reverseWords = sentence => {
  const arr = sentence.split(' ')

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[(arr.length - i) - 1]] = [arr[(arr.length - i) - 1], arr[i]]
  }

  return arr.join(' ')
}

console.log(reverseWords('find you will pain only go you recordings security the into if'))
