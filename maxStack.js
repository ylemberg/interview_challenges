// Reference: https://www.interviewcake.com/question/javascript/largest-stack

class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if (!this.items.length) {
      return null
    }

    return this.items.pop()
  }

  peek() {
    if (!this.items.length) {
      return null
    }

    return this.items[this.items.length - 1]
  }
}

class maxStack extends Stack {
  constructor() {
    super()
    this.maxStorage = []
  }

  getMax() {
    const storedIdxs = Object.keys(this.maxStorage)
    const biggestStoredIdx = storedIdxs[storedIdxs.length - 1]
    return this.maxStorage[biggestStoredIdx]
  }

  removeMax() {
    const storedIdxs = Object.keys(this.maxStorage)
    const biggestStoredIdx = storedIdxs[storedIdxs.length - 1]
    delete this.maxStorage[biggestStoredIdx]
  }

  push(item) {
    this.items.push(item)
    this.maxStorage[item] = true
  }

  pop() {
    if (!this.items.length) {
      return null
    }

    const poppedVal = this.items.pop()

    this.getMax() === poppedVal && this.removeMax()

    return poppedVal
  }
}


// Interview Cake solution
function MaxStack() {
    this.stack     = new Stack();
    this.maxsStack = new Stack();
}

// Add a new item to the top of our stack. If the item is greater
// than or equal to the last item in maxsStack, it's
// the new max! So we'll add it to maxsStack.
MaxStack.prototype.push = function(item) {
    this.stack.push(item);
    if (!this.maxsStack.peek() || item >= this.maxsStack.peek()) {
        this.maxsStack.push(item);
    }
    return item;
};

// Remove and return the top item from our stack. If it equals
// the top item in maxsStack, they must have been pushed in together.
// So we'll pop it out of maxsStack too.
MaxStack.prototype.pop = function() {
    var item = this.stack.pop();
    if (item === this.maxsStack.peek()) {
        this.maxsStack.pop();
    }
    return item;
};

// The last item in maxsStack is the max item in our stack.
MaxStack.prototype.getMax = function() {
    return this.maxsStack.peek();
};