class LinkedListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const hasCycle = list => {
  let slowRunner = list
  let fastRunner = list

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next

    if (slowRunner === fastRunner) {
      return true
    }
  }

  return false
}

