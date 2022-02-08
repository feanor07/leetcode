/**
 * {@link https://leetcode.com/problems/find-all-anagrams-in-a-string/}
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  let current = "";
  let target = p;
  const result = [];

  for (let i = 0; i < s.length; i++) {
    // check if we have enough characters to reach target
    if (current.length + s.length-i < target.length) {
      return result;
    }
    
    const currentChar = s.charAt(i);
    const targetIndex = target.indexOf(currentChar);
    
    if (targetIndex >= 0) {
      // Find one from target; extend current, shorten target
      current += currentChar;
      target = target.substring(0, targetIndex) + target.substring(targetIndex+1);
    } else {
      const originalIndex = p.indexOf(currentChar);

      if (originalIndex >= 0) {
        // current char not in current target; but existing in original target; determine new target & current respectively
        const currentIndex = current.indexOf(currentChar);
        target += current.substring(0, currentIndex);
        current = current.substring(currentIndex+1) + currentChar;
      } else {
        // Encountered a character not in the original target; reset to initial state
        current = "";
        target = p;
      }
    }

    if (target.length === 0) {
      // we found an anagram; put it to result & shorten current one char and extend target one char!
      result.push(i-p.length+1);
      target = current.charAt(0);
      current = current.substring(1);
    }
  }
  
  return result;
};

module.exports = findAnagrams;
