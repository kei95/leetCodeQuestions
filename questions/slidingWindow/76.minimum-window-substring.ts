// 1. create object from "t"
// 2. iterate "s" and put head on the char included in "t"
// 3. move tail to toward the length
// 4. when it includes all chars, move head

function minWindow(s: string, t: string): string {
  if (t === "") return "";
  const tHashMap = {};
  const windowHashMap = {};
  let headIndex = 0;
  let res = "";

  // Create the countT
  for (const char of t) {
    tHashMap[char] = tHashMap[char] ? tHashMap[char] + 1 : 1;
  }

  // These variables are the factors to determine whether chars are included or not
  let have = 0;
  let need = Object.keys(tHashMap).length; // this has to be based upon countT's keys

  for (let tail = 0; tail < s.length; tail++) {
    const tailChar = s[tail];
    windowHashMap[tailChar] = windowHashMap[tailChar]
      ? windowHashMap[tailChar] + 1
      : 1;

    // When the char in tHashMap is visited, increment have count
    if (tHashMap[tailChar] && windowHashMap[tailChar] === tHashMap[tailChar]) {
      have++;
    }

    // while substring condition is met, move head to right to shrink the window
    while (have === need) {
      // When the window is small but condition is still met, update the res
      if (res.length === 0 || tail - headIndex + 1 < res.length) {
        res = s.substring(headIndex, tail + 1);
      }

      windowHashMap[s[headIndex]] -= 1;

      // If the window doesn't include the matching char anymore, decrease have count
      if (
        tHashMap[s[headIndex]] &&
        windowHashMap[s[headIndex]] < tHashMap[s[headIndex]]
      ) {
        have -= 1;
      }

      headIndex++;
    }
  }

  return res;
}

// time: O(n)
// space: O(n)
