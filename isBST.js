// Reference: https://www.interviewcake.com/question/javascript/bst-checker

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

const isBst = root => {
  const inOrderNodes = []
  const stack = [root]
  let curr = root
  let max = Number.NEGATIVE_INFINITY

  while (stack.length) {
    if (curr) {
      curr.left && stack.push(curr.left)
      curr = curr.left
    } else {
      curr = stack.pop()
      if (curr) {
        if (curr.val <= max) {
          return false
        }

        max = curr.val
        inOrderNodes.push(curr.val)
        curr.right && stack.push(curr.right)
        curr = curr.right
      }
    }
  }

  return true
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
console.log(isBst(bst))

const bst2 = new BinaryTreeNode(7)
const firstLeft2 = bst2.insertLeft(3)
const firstRight2 = bst2.insertRight(13)
const secondLeft2 = firstLeft2.insertLeft(1)
const secondRight2 = firstLeft2.insertRight(5)
const thirdLeft2 = firstRight2.insertLeft(11)
const thirdRight2 = firstRight2.insertRight(15)
const fourthRight2 = thirdRight2.insertRight(17)
const fifthRight2 = fourthRight2.insertRight(19)
const fourthLeft2 = thirdLeft2.insertLeft(9)
console.log(isBst(bst2))