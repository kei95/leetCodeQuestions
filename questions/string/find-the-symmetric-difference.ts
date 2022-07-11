// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

/**
 * Create library that contains all elements of arrays to tell whether the element is duplicate or not.
 * Because it's a binary operation, it needs to be excuted one by one instead of run it at once.
 * Thus, the function starts from making the library out of the first array of the argument, and iterate through all arrays afterwords.
 * At the end, go through the library's key and create an array to make a response.
 *
 * - time: O(n) - it iterates all elements once
 * - space: O(n) - response gets as many as given elements
 */
function sym(...args: number[][]): number[] {
  const [firstArr, ...restArr] = args;
  const res: ReturnType<typeof sym> = [];
  const lib: Record<string, boolean> = {};

  // fill in lib out of the first array
  for (const num of [...new Set(firstArr)]) {
    const isNumInLib = lib[num];
    // make it true if the item is unique
    lib[num] = !isNumInLib;
  }

  // update the lib variable with rest of the list of arrays
  for (let arr of restArr) {
    // remove duplicates
    arr = [...new Set(arr)];

    for (const num of arr) {
      const isNumInLib = lib[num];
      // make it true if the item is unique
      lib[num] = !isNumInLib;
    }
  }

  // iterate through the library and push all unique elements
  Object.keys(lib).forEach((el) => {
    if (!lib[el]) return;
    res.push(Number(el));
  });

  return res;
}

// [1, 4, 5]
// [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
