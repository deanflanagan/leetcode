/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let revString = String(x).split("").reverse().join("");

  if (revString.charAt(revString.length - 1) == "-") {
    revString = "-" + revString.substring(0, revString.length - 1);
  }
  const revNumber = Number(revString);
  if (revNumber < 2 ** 31 - 1 && revNumber > (-2) ** 31) {
    // return console.log(revNumber);
    return revNumber;
  } else {
    return 0;
  }
};
