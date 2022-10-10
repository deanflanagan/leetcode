/**
 * @param {number} x
 * @return {boolean}
 */

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

var isPalindrome = function (x) {
  if (x > -1 && String(x) === reverseString(String(x))) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(0));
