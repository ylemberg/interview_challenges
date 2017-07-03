class Trie {
  constructor() {
    this.rootNode = {}
  }

  insertUrl(url) {
    let curr = this.rootNode

    for (let i = 0; i < url.length; i++) {
      const char = url[i]
      if (!curr[char]) {
        curr[char] = {}
      }

      curr = curr[char]
    }

    if (!curr['*']) {
      curr['*'] = true
    }
  }
}
