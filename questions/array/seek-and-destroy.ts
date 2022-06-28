// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

/**
 * filters passed array with given `targets`. It filters out any element included in `targets`.
 *
 * - time O(n);
 * @param arr - the array to be filtered. this function doesn't modify the given value
 * @param targets - elements to filter the given `arr`
 */
function destroyer(arr: (string | number)[], ...targets: (string | number)[]) {
  const remainingItems = arr.filter((item) => {
    return !targets.includes(item);
  });

  return remainingItems;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
