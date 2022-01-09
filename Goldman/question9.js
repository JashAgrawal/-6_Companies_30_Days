const Decode = (str) => {
  const s = "".concat(str).toUpperCase().split("");
  let cur_max = 0;
  let last_entry = 0;
  let ans = "";
  let j;
  function noOfDs(cur_position) {
    let j = cur_position + 1;
    let No_of_Ds = 0;
    while (j < s.length && s[j] == "D") {
      No_of_Ds++;
      j++;
    }
    return No_of_Ds;
  }
  for (let i = 0; i < s.length; i++) {
    let no_of_next_Ds = 0;
    if (s[i] == "I") {
      no_of_next_Ds = noOfDs(i);
      if (i == 0) {
        cur_max = no_of_next_Ds + 2;
        ans += ++last_entry;
        ans += cur_max;
        last_entry = cur_max;
      } else {
        cur_max = cur_max + no_of_next_Ds + 1;
        last_entry = cur_max;
        ans += last_entry;
      }
    } else if (s[i] == "D") {
      no_of_next_Ds = noOfDs(i);
      if (i == 0) {
        cur_max = no_of_next_Ds + 1;
        ans += cur_max;
        ans += cur_max - 1;
        last_entry = cur_max - 1;
      } else {
        ans += last_entry - 1;
        last_entry--;
      }
    }
  }
  return ans;
};
console.log(Decode("IIDDD"));
