/**
 * {@link https://leetcode.com/problems/first-bad-version/}
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let result = n;
      let start = 1;
      let end = n - 1;
      
      while (start <= end) {
          const middle = Math.floor((start + end)/2);
          let currentResult = isBadVersion(middle);
          
          if (currentResult) {
              result = middle;
              end = middle - 1;
          } else {
              start = middle + 1;
          }
      }
      
      return result;
  };
};

module.exports = solution;