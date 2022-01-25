const solution = require('../src/q278-first-bad-version');

test('checks bad version at lowest', () => {
  const isBadVersion = () => true;
  const func = solution(isBadVersion);
  expect(func(1)).toEqual(1);
  expect(func(2)).toEqual(1);
  expect(func(50)).toEqual(1);
});

test('checks bad version at an intermediate index', () => {
  const isBadVersion = (n) => n > 5;
  const func = solution(isBadVersion);
  expect(func(6)).toEqual(6);
  expect(func(20)).toEqual(6);
  expect(func(50)).toEqual(6);
});

