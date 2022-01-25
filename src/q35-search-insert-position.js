/**
 * {@link https://leetcode.com/problems/search-insert-position/}
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length-1;

  while (start <= end) {
    const middle = parseInt((start + end)/2);

    if (target === nums[middle]) {
      return middle;
    }

    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle+1;
    }
  }

  return start;
};

module.exports = searchInsert;
