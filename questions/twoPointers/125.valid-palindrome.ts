// https://leetcode.com/problems/valid-palindrome

function isPalindrome(s: string): boolean {
  // Get rid of all non-alphanumeric numbers
  const alphanumericChars = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let headIndex = 0;
  let tailIndex = alphanumericChars.length - 1;

  while (headIndex < tailIndex) {
    if (alphanumericChars[headIndex] !== alphanumericChars[tailIndex])
      return false;
    headIndex++;
    tailIndex--;
  }

  return true;
}

// time: O(n)
// space: O(n)
