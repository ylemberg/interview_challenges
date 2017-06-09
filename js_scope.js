// Reference: https://www.interviewcake.com/question/javascript/js-whats-wrong

const logInOneSecond = idx => {
  setTimeout(() => {
    console.log(idx)
  }, 1000)
}

for (var i = 0; i < 5; i++) {
  logInOneSecond(i)
}
