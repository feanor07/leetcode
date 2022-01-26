/**
 * {@link https://leetcode.com/problems/ugly-number/}
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function(n) {    
  while (true) {
    let startingNum = n;

    if (n%2==0) {
      n = n/2;
    }

    if (n%3==0) {
      n = n/3;
    }

    if (n%5==0) {
      n = n/5;
    }

    if (n==startingNum) {
      break;
    }
  }
  
  return n == 1;
};

module.exports = isUgly;
