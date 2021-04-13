/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closers = { "(": ")", "[": "]", "{": "}" };

  let arr = [];
  if (s.length > 0 && s.length % 2 === 0) {
    for (let i = 0; i < s.length; i++) {
      if (closers[s[i]]) {
        arr.unshift(closers[s[i]]);
      } else {
        if (arr[0] === s[i]) {
          arr.shift(closers[s[i]]);
        } else return false;
      }
    }
    if (arr.length === 0) {
      return true;
    } else return false;
  } else return false;
};

const tests = [
  "",
  "(){}}{",
  "]",
  "((",
  "(",
  "()",
  "()[]{}",
  "(]",
  "([)]",
  "{[]}",
  "([}}])",
  "){",
];

tests.map((testStr) => {
  console.log(isValid(testStr));
});
