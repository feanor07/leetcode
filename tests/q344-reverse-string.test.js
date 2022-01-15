const reverseString = require('../src/q344-reverse-string.js');

test('checks basic examples', () => {
  let array = ["h","e","l","l","o"];
  reverseString(array);
  expect(array).toEqual(["o","l","l","e","h"]);
  array = ["H","a","n","n","a","h"];
  reverseString(array);
  expect(array).toEqual(["h","a","n","n","a","H"]);
})
