// https://leetcode.com/problems/min-stack

class MinStack {
  private stack: { val: number; minVal: number }[];
  private size: number;

  constructor() {
    this.stack = [];
    this.size = -1;
  }

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val, minVal: val });
    } else {
      this.stack.push({
        val,
        minVal: Math.min(this.stack[this.size].minVal, val),
      });
    }
    this.size++;
  }

  pop(): void {
    this.stack.pop();
    this.size--;
  }

  top(): number {
    return this.stack[this.size].val;
  }

  getMin(): number {
    return this.stack[this.size].minVal;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
