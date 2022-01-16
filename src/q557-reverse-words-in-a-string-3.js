/**
 * {@link https://leetcode.com/problems/reverse-words-in-a-string-iii/}
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  let result = "";
  let temp = "";

  for (let c of s) {
    if (c === ' ') {
      result = result + temp + ' ';
      temp = "";
    } else {
      temp = c + temp;
    }
  }

  return result + temp;
};

module.exports = reverseWords;
