const uglyNos = (n) => {
  let uglies = [];
  uglies[1] = 1;
  let p2 = 1,
    p3 = 1,
    p5 = 1;
  for (let i = 2; i <= n; i++) {
    let f2 = 2 * uglies[p2];
    let f3 = 3 * uglies[p3];
    let f5 = 5 * uglies[p5];
    let min = Math.min(f2, f3, f5);
    uglies[i] = min;
    min == f2 && p2++;
    min == f3 && p3++;
    min == f5 && p5++;
  }
  return uglies[n];
};
console.log(uglyNos(5));
