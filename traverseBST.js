class BinaryTreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}

const inOrderRecursive = node => {
  node.left && inOrderRecursive(node.left)
  node.right && inOrderRecursive(node.right)
  console.log(node.val)
}

const inOrderIterative = root => {
  const stack = [root]
  let curr = root
  //let done = true
  while (true) { // or while (!done)
    if (curr) {
      curr.left && stack.push(curr.left)
      curr = curr.left
    } else if (!curr) {
      if (!stack.length) {
        break // or done = true
      }
      curr = stack.pop()
      console.log(curr.val)
      curr.right && stack.push(curr.right)
      curr = curr.right
    }
  }
}

const bst = new BinaryTreeNode(1)
const firstLeft = bst.insertLeft(2)
const firstRight = bst.insertRight(3)
const secondLeft = firstLeft.insertLeft(4)
const secondRight = firstLeft.insertRight(5)
const thirdLeft = firstRight.insertLeft(6)
const thirdRight = firstRight.insertRight(7)
const fourthRight = thirdRight.insertRight(8)
const fifthRight = fourthRight.insertRight(9)
const fourthLeft = thirdLeft.insertLeft(10)

inOrderRecursive(bst)
inOrderIterative(bst)
