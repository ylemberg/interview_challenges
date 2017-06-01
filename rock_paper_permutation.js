// Reference: https://challenge.makerpass.com/c/60fe81a4adfa05cdedfde520a6bcb1d9

const rockPaperPermutation = roundCount => {
  let results = []

  if (roundCount === 0) {
    return []
  } else if (roundCount === 1) {
    return ['r', 'p', 's']
  }

  let previousPerms = ['r', 'p', 's']
  for (let i = 0; i < roundCount - 1; i++) {
    results = []

    for (let j = 0; j < previousPerms.length; j++) {
      results = results.concat(['r', 'p', 's'].reduce((possibilities, letter) => possibilities.concat([previousPerms[j] + letter]), []))
    }
    previousPerms = results.slice()
  }

  return results
}
