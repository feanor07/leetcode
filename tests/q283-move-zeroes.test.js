const moveZeroes = require('../src/q283-move-zeros');

test('checks no zeroes', () => {
  let array = [1,2,3,4,5];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5]);
});

test('checks just zeroes', () => {
  let array = [0];
  moveZeroes(array);
  expect(array).toEqual([0]);

  array = [0,0,0];
  moveZeroes(array);
  expect(array).toEqual([0,0,0]);
});

test('checks move single zero', () => {
  let array = [0,1,2,3,4,5];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0]);

  array = [1,2,0,3,4,5];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0]);

  array = [1,2,3,4,5,0];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0]);
});

test('checks move multiple zeros', () => {
  let array = [0,0,1,2,3,4,5];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0,0]);

  array = [1,2,0,3,0,4,0,5];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0,0,0]);

  array = [0,1,0,2,0,0,0,3,4,5,0];
  moveZeroes(array);
  expect(array).toEqual([1,2,3,4,5,0,0,0,0,0,0]);
});
