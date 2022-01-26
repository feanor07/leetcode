const sortedSquares = require('../src/q977-squares-of-a-sorted-array');

test('check sorted squares', () => {
  expect(sortedSquares([1,3,5,6], 1)).toEqual([1,9,25,36]);
  expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
  expect(sortedSquares( [-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
});
