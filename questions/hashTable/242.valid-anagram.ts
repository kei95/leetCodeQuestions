// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hashMap = {};

  for (const char of s) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const char of t) {
    if (!hashMap[char] || hashMap[char] === 0) return false;
    hashMap[char] = hashMap[char] - 1;
  }

  return true;
}

// time: O(n)
// space: O(n)
