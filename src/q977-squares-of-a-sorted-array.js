/**
 * {@link https://leetcode.com/problems/squares-of-a-sorted-array/}
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  const result = [];
  let start = 0;
  let end = nums.length-1;
  
  for (let i = nums.length-1; i >= 0; i--) {
      const s = Math.abs(nums[start]);
      const e = Math.abs(nums[end]);

      if (s>e) {
        result[i] = s*s;
        start++;
      } else {
        result[i] = e*e;
        end--;
      }
  }
  
  return result;
};

module.exports = sortedSquares;
