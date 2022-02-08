const findAnagrams = require('../src/q438-find-all-anagrams-in-a-string');

test('checks source shorter than target', () => {
  expect(findAnagrams("abc", "abcd")).toEqual([]);
});

test('checks target not in source', () => {
  expect(findAnagrams("abcdef", "bd")).toEqual([]);
});

test('checks target in source exactly once', () => {
  expect(findAnagrams("ab", "ba")).toEqual([0]);
  expect(findAnagrams("afcdeabg", "ba")).toEqual([5]);
});

test('checks tests in leetcode', () => {
  expect(findAnagrams("cbaebabacd", "abc")).toEqual([0,6]);
  expect(findAnagrams("abab", "ba")).toEqual([0,1,2]);
});
