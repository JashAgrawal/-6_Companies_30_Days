const Decode = (str) => {
  let count = [];
  count[0] = 1;
  count[1] = 1;
  let s = str.split("");
  for (let i = 2; i <= s.length + 1; i++) {
    count[i] = 0;
    if (s[i - 1] > "0") {
      count[i] = count[i - 1];
    }
    if ((s[i - 2] == "1" || s[i - 2] == "2") && s[i - 1] < "7") {
      count[i] = count[i] + count[i - 2];
    }
  }
  return count[s.length];
};
console.log(Decode("11"));
