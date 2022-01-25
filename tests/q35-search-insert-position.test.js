const searchInsert = require('../src/q35-search-insert-position');

test('checks existing targets', () => {
  expect(searchInsert([1,3,5,6], 1)).toEqual(0);
  expect(searchInsert([1,3,5,6], 3)).toEqual(1);
  expect(searchInsert([1,3,5,6], 5)).toEqual(2);
  expect(searchInsert([1,3,5,6], 6)).toEqual(3);
});

test('checks non-existing targets', () => {
  expect(searchInsert([1,3,5,6], 0)).toEqual(0);
  expect(searchInsert([1,3,5,6], 2)).toEqual(1);
  expect(searchInsert([1,3,5,6], 4)).toEqual(2);
  expect(searchInsert([1,3,5,6], 7)).toEqual(4);
});
