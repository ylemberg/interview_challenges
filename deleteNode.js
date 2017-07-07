// Reference: https://www.interviewcake.com/question/javascript/delete-node

class LinkedList {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const deleteNode = node => {
  if (node.next) {
    const nextNode = node.next

    node.val = nextNode.val
    node.next = nextNode.next
  } else {
    node = null
  }
}
