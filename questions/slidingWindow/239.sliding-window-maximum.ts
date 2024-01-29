// https://leetcode.com/problems/sliding-window-maximum

function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = [];
  let queue: number[] = []; // Monotonically decreasing queue - decreasing order
  let head = 0;
  let tail = 0;

  while (tail < nums.length) {
    // If the current focus with tail is bigger than the first element of queue (biggest num)
    // pop it until the queue is empty
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[tail]) {
      queue.pop();
    }

    queue.push(tail);

    // If the head of the queue (index) is smaller than the head
    // it should dequeue as it's out of window
    if (head > queue[0]) {
      queue.shift();
    }

    // If the tail is bigger than the k (at least contain the window)
    // push the index to the res and increment head to slide the window
    if (tail + 1 >= k) {
      res.push(nums[queue[0]]);
      head++;
    }

    tail++;
  }

  return res;
}
