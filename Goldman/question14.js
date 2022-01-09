const minSubArrayLen = (k, arr) => {
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= k) {
      ans = Math.min(ans, i - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};
console.log(minSubArrayLen(7, [1, 2, 3, 5, 4]));
