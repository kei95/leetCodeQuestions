/*
 * @lc app=leetcode id=1926 lang=typescript
 *
 * [1926] Nearest Exit from Entrance in Maze
 */

// @lc code=start

/**
 * Each direction to move each time
 * * `top`    = [n-1][n]
 * * `bottom` = [n+1][n]
 * * `right`  = [n][n+1]
 * * `left`   = [n][n-1]
 */
const DIRECTION = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

/**
 * `BFS`
 *
 * Travel four possible direction and queue the path if it's legitimate.
 * Every time path moves forward, assign steps to it too, and eventually,
 * when the path hits the exist, return its steps count.
 *
 * Inside of iteration, keep adding legitimate path to queue and dequeue it to travel its children.
 * If the queue is empty, means that every possible path is taken but there's no exit.
 *
 * `n = paths`
 * * time: O(n + 4(directions))
 * * space: O(n)
 */
function nearestExit(maze: string[][], entrance: number[]): number {
  const [entranceY, entranceX] = entrance;
  maze[entranceY][entranceX] = "+";

  const queue: number[][] = [[entranceY, entranceX, 0]];

  // queue is empty = traversed everywhere possible
  while (queue.length > 0) {
    const [y, x, step] = queue.shift() as number[];

    // Move right, left, bottom and top on each iteration
    // if it's legit path, enqueue it.
    for (const [directionY, directionX] of DIRECTION) {
      const nextY = y + directionY;
      const nextX = x + directionX;
      const nextStep = step + 1;

      // if current point is out of maze, visited or wall
      const isPathWalkable =
        nextY < 0 ||
        nextY >= maze.length ||
        nextX < 0 ||
        nextX >= maze[0].length ||
        maze[nextY][nextX] !== ".";
      if (isPathWalkable) continue;

      // if the current path is at the end of the maze, return it right away
      const isExit =
        nextY === 0 ||
        nextY === maze.length - 1 ||
        nextX === 0 ||
        nextX === maze[0].length - 1;
      if (isExit) return nextStep;

      // mark as walked
      maze[nextY][nextX] = "W";

      queue.push([nextY, nextX, nextStep]);
    }
  }

  return -1;
}

// @lc code=end
