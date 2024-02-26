# Binary Search

Binary Search is a searching algorithm to search an element in an array. It's typically more performant than regular searching algorithm given by language as it's typically `O(n)`. Binary Search is `O(log n)` because of its execution. However, it can only be applied to **sorted array** wheres its elements are integer

## How it works

**Base case**
Binary Search is performed by getting middle part of a range and keep shrinking the range by moving the left and right pointer until either;
1. it finds the element searching for
2. left pointer and right pointer meets
Since the searching range gets cut by half on each iteration, its time complexity is `O(log n)`.

For example, if given array is `[4, 6, 9, 12, 15]` and it's searching for `6, the algorithm iterates as follows;
1. declare `left pointer` to be 0 and `right pointer` to be the last index of the array (4 in this case)
2. get the `mid pointer` with the following formula `mid pointer = floor((left pointer + right pointer) / 2)`. In this case it's "2".
3. check the element in `mid pointer` index
4. Move the pointer based on conditions;
    - If `focused element > target`, move the `right pointer` to current `mid pointer - 1` to shrink its range.
    - If `focused element < target`, move the `left pointer` to current `mid pointer + 1` to shrink its range.
    - If `focused element` matches the target, return it.
5. Continue to repeat (2) to (4) until it meets **base case** above

![binary-search](./binary-search.png)