const gcd = (str1, str2) => {
  if (str1.length < str2.length) {
    return gcd(str2, str1);
  } else if (!str1.startsWith(str2)) {
    return "";
  } else if (str2.length == 0) {
    return str1;
  } else {
    return gcd(str1.substr(str2.length), str2);
  }
};
console.log(gcd("abc", "abcabc"));
