// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

/**
 * Iterate through all objects within `collection` with keys of `source` object.
 * Then objects which contains source's key and value will pushed to response array
 *
 * time - O(n)
 */
function whatIsInAName(
  collection: Record<string, string>[],
  source: Record<string, string>
) {
  const arr: Record<string, string>[] = [];

  const sourceKeys = Object.keys(source);
  for (const element of collection) {
    const isMatchSource = sourceKeys.every(
      (key) => element[key] === source[key]
    );
    if (isMatchSource) arr.push(element);
  }

  return arr;
}
