// https://leetcode.com/problems/permutation-in-string

// s1 = "ab", s2 = "eidbaooo"
// 1. store s1 and s2 in hash map wiht all possible 26 chars
// 2. iterate through s2 with the length of s1 (sliding window)
// 3. after the iteration, compare the mount that matches in the hash maps
// 4. when the match is the maximum number (26) it should return true

function createCharsObject() {
  // Creating an object with keys from 'a' to 'z'
  const myObject = {};
  for (let i = 97; i <= 122; i++) {
    const key = String.fromCharCode(i);
    myObject[key] = 0;
  }

  return myObject;
}

function checkInclusion(s1: string, s2: string): boolean {
  const s1Chars = createCharsObject();
  const s2Chars = createCharsObject();
  let head = 0;
  let tail = s1.length - 1;

  for (const char of s1) {
    s1Chars[char] += 1;
  }

  while (tail < s2.length) {
    // first iteration needs to all them all
    // afterwords all I need to care is head and tail value
    if (head === 0) {
      let focus = head;
      while (focus <= tail) {
        s2Chars[s2[focus]] += 1;
        focus++;
      }
    }

    const isMatching = Object.values(s1Chars).every(
      (val, index) => val === Object.values(s2Chars)[index]
    );
    if (isMatching) return true;

    // subtract head as the scope has been moved away
    s2Chars[s2[head]] -= 1;
    head++;
    tail++;
    s2Chars[s2[tail]] += 1;
  }

  return false;
}

// time: O(26 * n)
// space: O(26 * 2)
