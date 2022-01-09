const Decode = (str) => {
  st = [];
  let num = 1;
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == "D") {
      st.push(num++);
    } else {
      st.push(num++);
      while (st.length > 0) {
        ans += st.pop();
      }
    }
  }
  while (st.length > 0) {
    ans += st.pop();
  }
  return ans;
};
console.log(Decode("IIDDD"));
