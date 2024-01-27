// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  let head = 0;
  const hashMap = {};

  for (let tail = 0; tail < s.length; tail++) {
    const currentChar = s[tail];
    hashMap[currentChar] = hashMap[currentChar] ? hashMap[currentChar] + 1 : 1;

    if (hashMap[currentChar] > 1) {
      while (hashMap[currentChar] !== 1) {
        hashMap[s[head]] -= 1;
        head++;
      }
    }

    const substringLength = tail + 1 - head;
    if (substringLength > res) res = substringLength;
  }

  return res;
}

// time: O(n)
// space: O(n)
