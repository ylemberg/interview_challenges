// Reference: https://www.interviewcake.com/question/javascript/balanced-binary-tree

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

const isSuperBalanced = root => {
  let max = null
  let min = null
  let depth = 0

  let curr = root
  const parents = [root]

  while (true) {
    curr.touched = true
    if (curr.left && !curr.left.touched) {
      parents.push(curr)
      curr = curr.left
      depth++
    } else if (curr.right && !curr.right.touched) {
      parents.push(curr)
      curr = curr.right
      depth++
    } else {
      if (!curr.right && !curr.left) {
        if (max && ((Math.abs(depth - min) > 1) || (Math.abs(depth - max) > 1))) {
          return false
        }

        max = max ? Math.max(max, depth) : depth
        min = min ? Math.min(min, depth) : depth
      }
      depth--
      curr = parents.pop()
      if (!parents.length && (!curr.right || (curr.right && curr.right.touched))) {
        break
      }
    }
  }

  return true
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

console.log(isSuperBalanced(bst))