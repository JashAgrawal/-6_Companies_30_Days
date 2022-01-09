const chessBoard1 = (n) => {
  let i = n;
  let ans = 0;
  while (i > 0) {
    ans += i * i;
    i--;
  }
  return ans;
};
//or
const chessBoard2 = (n) => {
  let ans = (n * (n + 1) * (2 * n + 1)) / 6;
  return ans;
};
console.log(chessBoard2(8));
