// https://leetcode.com/problems/time-based-key-value-store/

class TimeMap {
  store: { [key in string]: { value: string; timestamp: number }[] };

  constructor() {
    this.store = {};
  }

  set(key: string, value: string, timestamp: number): void {
    const insertionValue = { value, timestamp };

    if (!this.store[key]) {
      this.store[key] = [];
    }

    this.store[key].push(insertionValue);
  }

  get(key: string, timestamp: number): string {
    const storeValue = this.store[key];
    if (!storeValue) return "";
    if (storeValue[0].timestamp > timestamp) return "";

    let left = 0;
    let right = storeValue.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midData = storeValue[mid];

      if (midData.timestamp === timestamp) {
        return storeValue[mid].value;
      }

      if (midData.timestamp > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return storeValue[right].value;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// {
//    key: [
//     {val: "bar", timestamp: 1},
//     {val: "bar2", timestamp: 3}
//     {val: "bar3", timestamp: 4}
//    ]
// }
