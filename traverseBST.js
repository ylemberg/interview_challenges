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

// In-Order DFS
const inOrderRecursive = node => {
  node.left && inOrderRecursive(node.left)
  console.log(node.val)
  node.right && inOrderRecursive(node.right)
}

const inOrderIterative = root => {
  const stack = [root]
  let curr = root

  while (stack.length) {
    if (curr) {
      curr.left && stack.push(curr.left)
      curr = curr.left
    } else if (!curr) {
      curr = stack.pop()
      console.log(curr.val)
      if (curr) {
        curr.right && stack.push(curr.right)
        curr = curr.right
      }
    }
  }
}

// Pre-Order DFS
const preOrderRecursive = node => {
  console.log(node.val)
  node.left && preOrderRecursive(node.left)
  node.right && preOrderRecursive(node.right)
}

const preOrderIterative = root => {
  const stack = [root]

  while (stack.length) {
    const curr = stack.pop()
    curr.right && stack.push(curr.right)
    curr.left && stack.push(curr.left)
    console.log(curr.val)
  }
}

// Post-Order DFS
const postOrderRecursive = node => {
  node.left && postOrderRecursive(node.left)
  node.right && postOrderRecursive(node.right)
  console.log(node.val)
}

const postOrderIterative2Stacks = root => {
  const stack1 = [root]
  const stack2 = []

  while (stack1.length) {
    const curr = stack1.pop()
    stack2.push(curr)
    curr.left && stack1.push(curr.left)
    curr.right && stack1.push(curr.right)
  }

  while (stack2.length) {
    console.log(stack2.pop().val)
  }
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
preOrderIterative(bst)

postOrderRecursive(bst)
postOrderIterative2Stacks(bst)
