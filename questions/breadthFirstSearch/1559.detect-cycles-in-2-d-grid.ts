/*
 * @lc app=leetcode id=1559 lang=typescript
 *
 * [1559] Detect Cycles in 2D Grid
 */

// @lc code=start
const DIRECTION = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
const WALKED = "W";

/**
 * `BFS`
 * Iterate through all nodes in the passed grid, if BFS's paths meet somewhere
 * that means there's a circle in the grid thus return true.
 * If the iteration is over without stopping
 * thar indicates that there's no circle in the grid thus return false
 *
 * * time: O(nm) n = nodes, m = directions
 * * space: O(nm) n = nodes, m = directions
 */
function containsCycle(grid: string[][]): boolean {
  // iterate through every single node
  for (let yPosition = 0; yPosition < grid.length; yPosition++) {
    for (let XPosition = 0; XPosition < grid[0].length; XPosition++) {
      // if the current position's item hasn't been checked yet
      // start BFS from there
      if (grid[yPosition][XPosition] !== WALKED) {
        const queue: number[][] = [[yPosition, XPosition]];

        // while queue is not empty, means there're paths,
        // check all 4 direction and move towards them.
        // If the path meets with existing one in the queue,
        // they are crossing thus it's a circle.
        while (queue.length > 0) {
          const [currY, currX] = queue.shift() as number[];
          const currChar = grid[currY][currX];

          // Iterate over every 4 directions
          for (const [dirY, dirX] of DIRECTION) {
            const nextY = currY + dirY;
            const nextX = currX + dirX;

            const isOutOfGrid =
              nextY < 0 ||
              nextY >= grid.length ||
              nextX < 0 ||
              nextX >= grid[0].length;

            if (isOutOfGrid) continue;

            // If the closing circle is found, stop right away and return true
            if (
              (queue.length > 0 &&
                queue[0][0] === nextY &&
                queue[0][1] === nextX) ||
              (queue.length > 0 &&
                queue[queue.length - 1][0] === nextY &&
                queue[queue.length - 1][1] === nextX)
            )
              return true;

            // push next start position into queue
            if (currChar === grid[nextY][nextX]) {
              queue.push([nextY, nextX]);
            }
          }

          // mark current position as "walked"
          grid[currY][currX] = WALKED;
        }
      }
    }
  }

  // If the code hits here, means that
  // there's no circle thus return false.(worst case scenario)
  return false;
}

console.log(
  containsCycle([
    ["b", "b", "b", "d"],
    ["b", "b", "b", "e"],
    ["b", "d", "d", "c"],
    ["b", "a", "a", "c"],
  ])
);
// @lc code=end
