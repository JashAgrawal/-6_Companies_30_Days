const decodedString = (str) => {
  let counts = [];
  let result = [];
  let res = "";
  let i = 0;
  while (i < str.length) {
    console.log(counts, result);
    if (!isNaN(str.charAt(i))) {
      let count = 0;
      while (!isNaN(str.charAt(i))) {
        count = 10 * count + parseInt(str.charAt(i));
        i++;
      }
      counts.push(count);
    } else if (str.charAt(i) == "[") {
      result.push(res);
      res = "";
      i++;
    } else if (str.charAt(i) == "]") {
      let count = counts.pop();
      let temp = "";
      for (let j = 0; j < count; j++) {
        temp += res;
      }
      console.log(temp);
      res = temp;
      i++;
    } else {
      res += str.charAt(i);
      i++;
    }
  }
  return result;
};
console.log(decodedString("3[b2[ca]]"));
