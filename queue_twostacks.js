class Queue {
  constructor() {
    this.inStack = new Stack()
    this.outStack = new Stack()
  }

  enqueue(val) {
    this.inStack.push(val)
  }

  dequeue() {
    if (!this.outStack.peek()) {
      while (this.inStack.peek()) {
        this.outStack.push(this.inStack.pop())
      }
    }

    return this.outStack.pop()
  }
}
