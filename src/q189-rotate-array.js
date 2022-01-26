/**
 * {@link https://leetcode.com/problems/rotate-array/}
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  const shift = k%nums.length;

  if (shift === 0) {
    return;
  }

  let swappedCount = 0;
  let startIndex = 0;

  while(swappedCount < nums.length) {
    let currentIndex = startIndex;
    let current = nums[startIndex];

    do {
      let nextIndex = (startIndex+shift) % nums.length;
      let temp = nums[nextIndex];
      nums[nextIndex] = current;
      current = temp;
      startIndex = nextIndex;
      swappedCount++;
    } while(currentIndex !== startIndex)

    startIndex++;
  }
};

module.exports = rotate;
