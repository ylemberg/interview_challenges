const findLargest = node => {
  let curr = node.left

  while (curr.right) {
    curr = curr.right
  }

  return curr.val
}

const findSecondLargest = root => {
  let curr = root

  while (curr) {
    if (curr.left && !curr.right) {
      return findLargest(curr.left)
    } else if (curr.right && !curr.right.left && !curr.right.right) {
      return curr.val
    }

    curr = curr.right
  }
}
