const reverseWords = require('../src/q557-reverse-words-in-a-string-3');

test('checks single word string', () => {
  expect(reverseWords("feanor07")).toEqual("70ronaef");
})

test('checks multiple words string', () => {
  expect(reverseWords("feanor07's good")).toEqual("s'70ronaef doog");
  expect(reverseWords("feanor07's quite awesome!")).toEqual("s'70ronaef etiuq !emosewa");
})
