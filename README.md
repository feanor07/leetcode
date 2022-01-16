# Leetcode Javascript Solutions
Attempts in solving leetcode exercises with javascript. All the submitted solutions pass the leetcode test cases; yet none of the solutions are cliamed to be the best ones in terms of memory and/or CPU performance.

Each question has a corresponding solution & test file. The convention in naming the solution files is as follows: `q{questionNoAtLeetCode}-{questionNameAtLeetCode}.js` and the test file is simly named as `{solutionFileName}.test.js`.

To give an example; file name for the solution of the question 167 is simply `q167-two-sum-2.js` and test file name is `q167-two-sum-2.test.js`.

For unit testing solutions, [jest] (https://jestjs.io/) is being leveraged.

## Running tests
Upon running `npm install` (or `yarn`) you can simply run `jest` (`yarn test` or `npm test`) in the root folder to run tests for all available questions.

If you want to run tests for a specific question simply run `npm test q{quesionNoAtLeetCode}`; i.e. `npm test q167`.
