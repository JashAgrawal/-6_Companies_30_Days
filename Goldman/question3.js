const countSubArrayProductLessThanK = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    mul = arr[i];
    if (mul < k) count += 1;
    for (let j = i + 1; j < arr.length; j++) {
      mul = mul * arr[j];
      if (mul < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};
console.log(countSubArrayProductLessThanK([1, 9, 2, 8, 6, 4, 3], 100));
