const isUgly = require('../src/q263-ugly-number');

test('check isUgly', () => {
  expect(isUgly(0)).toBeFalsy();
  expect(isUgly(1)).toBeTruthy();
  expect(isUgly(2)).toBeTruthy();
  expect(isUgly(6)).toBeTruthy();
  expect(isUgly(11)).toBeFalsy();
  expect(isUgly(14)).toBeFalsy();
  expect(isUgly(30)).toBeTruthy();
  expect(isUgly(390)).toBeFalsy();
});
