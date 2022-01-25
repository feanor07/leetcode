/**
 * {@link https://leetcode.com/problems/binary-search/}
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middleIndex = Math.floor((start+end)/2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    }

    if (target > nums[middleIndex]) {
      start = middleIndex+1;
    } else {
      end = middleIndex-1;
    }
  }

  return -1;
};

module.exports = search;
