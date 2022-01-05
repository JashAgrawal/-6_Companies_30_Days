const canPair = (arr, k) => {
  if (arr.length % 2 !== 0) {
    return false;
  }
  let hashmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const rem = arr[i] % k;
    if (!hashmap.has(rem)) {
      hashmap.set(rem, 1);
    } else {
      hashmap.set(rem, hashmap.get(rem) + 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const rem = arr[i] % k;
    hashmap.get(rem);
    if (rem * 2 == k) {
      if (hashmap.get(rem) % 2 !== 0) {
        return false;
      }
    } else if (rem == 0) {
      if (hashmap.get(rem) % 2 !== 0) {
        return false;
      }
    } else {
      if (hashmap.get(rem) !== hashmap.get(k - rem)) {
        return false;
      }
    }
  }
  return true;
  //   console.log(hashmap);
};
let res = canPair([5, 5, 10, 10, 2, 8, 7, 3], 10);
console.log(res);
