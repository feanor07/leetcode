/**
 * {@link https://leetcode.com/problems/move-zeroes/}
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let leastZeroIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    
    if (current === 0 && leastZeroIndex < 0) {
      leastZeroIndex = i;
    }

    if (current !== 0 && leastZeroIndex >= 0) {
      nums[leastZeroIndex] = current;
      nums[i] = 0;
      leastZeroIndex++;
    }
  }
};

module.exports = moveZeroes;
