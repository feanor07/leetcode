const search = require('../src/q704-binary-search');

test('checks target exists case', () => {
  expect(search([-1,0,3,5,9,12], -1)).toEqual(0);
  expect(search([-1,0,3,5,9,12], 0)).toEqual(1);
  expect(search([-1,0,3,5,9,12], 9)).toEqual(4);
  expect(search([-1,0,3,5,9,12], 12)).toEqual(5);
})

test('checks target not exists case', () => {
  expect(search([-1,0,3,5,9,12], -2)).toEqual(-1);
  expect(search([-1,0,3,5,9,12], 4)).toEqual(-1);
  expect(search([-1,0,3,5,9,12], 13)).toEqual(-1);
})
