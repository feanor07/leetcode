/**
 * {@link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/}
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const func = function(numbers, target) {
  let end = numbers.length - 1;
  let start = 0;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start+1, end+1];
    }

    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }

  return [];
};

module.exports = func;