// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

/**
 * store given arrays with `Set`. Then filter both of them using its `has()` to get symmetric difference.
 *
 * - time: O(n)
 * - space: O(n)
 */
function diffArray(arr1: number[], arr2: number[]) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const hashedArr1 = new Set(arr1);
  const hashedArr2 = new Set(arr2);

  const newArr = Array.from(hashedArr1).filter(
    (number) => !hashedArr2.has(number)
  );
  const newArr2 = Array.from(hashedArr2).filter(
    (number) => !hashedArr1.has(number)
  );

  return [...newArr, ...newArr2];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
