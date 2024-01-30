// https://leetcode.com/problems/longest-repeating-character-replacement

// 1. from the index 0, move tail towards the end
// 2. each time you iterate, store char to store with its frequency incremented
// 3. out of the store, get the most frequent number and subtract with current length of the window
// 4. if the remaining is smaller than k, move head and update the max length if necessary
// 5. if the remaining of (3) exceeds k, subtract head's char and move head by 1
// 6. keep doing (5) til the window - most frequent chars (3) is smaller than 5
// 7. when tail exceeds the length of s, finish the function

function characterReplacement(s: string, k: number): number {
  const charStore: { [key: string]: number } = {};
  let maxLength = 0;
  let head = 0;

  for (let tail = 0; tail < s.length; tail++) {
    charStore[s[tail]] = charStore[s[tail]] ? charStore[s[tail]] + 1 : 1;

    while (tail + 1 - head - Math.max(...Object.values(charStore)) > k) {
      charStore[s[head]] = charStore[s[head]] - 1;
      head++;
    }

    maxLength = Math.max(maxLength, tail + 1 - head);
  }

  return maxLength;
}

// time O(26n)
// space O(n)

function characterReplacement_2(s: string, k: number): number {
  let hashMap: { [key: string]: number } = {};
  let longestLength = 0;
  let head = 0;

  for (let tail = 0; tail < s.length; tail++) {
    const tailChar = s[tail];
    hashMap[tailChar] = hashMap[tailChar] ? hashMap[tailChar] + 1 : 1;

    while (tail + 1 - head - Math.max(...Object.values(hashMap)) > k) {
      const headChar = s[head];
      hashMap[headChar] -= 1;
      head++;
    }

    longestLength = Math.max(longestLength, tail + 1 - head);
  }

  return longestLength;
}
