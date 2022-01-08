const MissingAndRepeating = (arr) => {
  let numberMap = {};
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    if (!numberMap[arr[i]]) {
      numberMap[arr[i]] = true;
    } else {
      ans["RepatingNumber"] = arr[i];
    }
  }
  //console.log(numberMap[3]);
  for (let k = 1; k <= arr.length; k++) {
    if (!numberMap[k]) {
      ans["MissingNumber"] = k;
    }
  }
  return `Repeating number is ${ans.RepatingNumber} and smallest positive missing number is ${ans.MissingNumber}.`;
};
console.log(MissingAndRepeating([1, 2, 2, 4, 5, 6, 7, 8]));
