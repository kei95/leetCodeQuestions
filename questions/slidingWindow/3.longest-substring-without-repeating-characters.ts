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

function lengthOfLongestSubstring_2(s: string): number {
  const hashMap = {};
  let head = 0;
  let maxLength = 0;

  for (let tail = 0; tail < s.length; tail++) {
    const tailChar = s[tail];
    hashMap[tailChar] = hashMap[tailChar] ? hashMap[tailChar] + 1 : 1;

    if (hashMap[tailChar] > 1) {
      while (hashMap[tailChar] !== 1) {
        hashMap[s[head]] -= 1;
        head++;
      }
    }

    if (maxLength < tail + 1 - head) {
      maxLength = tail + 1 - head;
    }
  }

  return maxLength;
}

// time: O(n)
// space: O(n)
