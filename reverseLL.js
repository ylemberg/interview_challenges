const reverseLL = list => {
  let prev = null
  let head = list
  let temp = null

  while (head) {
    temp = head.next
    head.next = prev
    prev = head
    head = temp
  }

  return prev
}
