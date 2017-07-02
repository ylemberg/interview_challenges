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
  console.log(node.val)
  node.right && inOrderRecursive(node.right)
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

const preOrderRecursive = node => {
  console.log(node.val)
  node.left && preOrderRecursive(node.left)
  node.right && preOrderRecursive(node.right)
}

const postOrderRecursive = node => {
  node.left && postOrderRecursive(node.left)
  node.right && postOrderRecursive(node.right)
  console.log(node.val)
}

const bst = new BinaryTreeNode(4)
const firstLeft = bst.insertLeft(2)
const firstRight = bst.insertRight(7)
const secondLeft = firstLeft.insertLeft(1)
const secondRight = firstLeft.insertRight(3)
const thirdLeft = firstRight.insertLeft(6)
const thirdRight = firstRight.insertRight(8)
const fourthRight = thirdRight.insertRight(9)
const fifthRight = fourthRight.insertRight(10)
const fourthLeft = thirdLeft.insertLeft(5)

inOrderRecursive(bst)
inOrderIterative(bst)

preOrderRecursive(bst)


postOrderRecursive(bst)
