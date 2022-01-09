const encode = (str) => {
  let count = 0;
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
      ans += str.charAt(i) + (count + 1);
      count = 0;
    } else {
      count++;
    }
  }
  return ans;
};
console.log(encode("aaaassbbbccdd"));
