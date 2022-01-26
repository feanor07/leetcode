const rotate = require('../src/q189-rotate-array');

test('check no rotation', () => {
  let array =  [1,2,3,4,5,6,7];
  rotate(array, 0);
  expect(array).toEqual([1,2,3,4,5,6,7]);
  rotate(array, 7);
  expect(array).toEqual([1,2,3,4,5,6,7]);
  rotate(array, 49);
  expect(array).toEqual([1,2,3,4,5,6,7]);
});

test('check rotations', () => {
  let array =  [1,2,3,4,5,6,7];
  rotate(array, 1);
  expect(array).toEqual([7,1,2,3,4,5,6]);
  array =  [1,2,3,4,5,6,7];
  rotate(array, 9);
  expect(array).toEqual([6,7,1,2,3,4,5]);
  array =  [1,2,3,4,5,6,7];
  rotate(array, 19);
  expect(array).toEqual([3,4,5,6,7,1,2]);
  array = [-1,-100,3,99];
  rotate(array, 2);
  expect(array).toEqual([3,99,-1,-100]);
});
