// https://leetcode.com/problems/car-fleet

function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: [number, number][] = [];
  const stack: number[] = [];

  for (let i = 0; i < position.length; i++) {
    const car: [number, number] = [position[i], speed[i]];
    cars.push(car);
  }

  cars.sort((car1, car2) => car1[0] - car2[0]);

  for (let i = cars.length - 1; i >= 0; i--) {
    const timeToReach = (target - cars[i][0]) / cars[i][1];

    // the car behind is faster
    if (stack[stack.length - 1] >= timeToReach) {
      continue;
    }

    stack.push(timeToReach);
  }

  return stack.length;
}
