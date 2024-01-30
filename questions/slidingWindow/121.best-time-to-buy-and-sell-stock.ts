// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices: number[]): number {
  let answer = 0;
  let headIndex = 0;
  let tailIndex = headIndex + 1;

  while (tailIndex < prices.length) {
    const profit = prices[tailIndex] - prices[headIndex];

    if (profit < 0) {
      headIndex = tailIndex;
      tailIndex = headIndex + 1;
      continue;
    }

    if (profit > answer) {
      answer = profit;
    }

    tailIndex++;
  }

  return answer;
}

// time: O(1)
// space: O(n)

// Jan 29th
function maxProfit_2(prices: number[]): number {
  let answer = 0;
  let headIndex = 0;
  let tailIndex = headIndex + 1;

  while (tailIndex < prices.length) {
    const profit = prices[tailIndex] - prices[headIndex];

    if (profit < 0) {
      headIndex = tailIndex;
      tailIndex = headIndex + 1;
      continue;
    }

    if (profit > answer) {
      answer = profit;
    }

    tailIndex++;
  }

  return answer;
}

// time: O(1)
// space: O(n)
