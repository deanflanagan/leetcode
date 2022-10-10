var romanToInt = function (s) {
  let newStr = s;
  let ttl = 0;
  const odd_vals = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const vals = {
    I: 1,
    III: 3,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  Object.keys(odd_vals).forEach((key) => {
    if (newStr.indexOf(key) >= 0) {
      ttl += odd_vals[key];
      let tempStr = newStr.split(key);
      newStr = tempStr.join("");
    }
  });
  [...newStr].forEach((c) => (ttl += vals[c]));
  return ttl;
};

console.log(romanToInt("MCMXCVI"));
