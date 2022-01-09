const anagramFinder = (words) => {
  let anagrams = {};
  let wordsSorted = words.sort();
  wordsSorted.map((word, i) => {
    let sortedWord = word.split("").sort().join("");
    let temp = [];
    wordsSorted.map((otherword, j) => {
      if (j == i) {
        return false;
      } else {
        if (sortedWord == otherword.split("").sort().join("")) {
          !temp.includes(word) && temp.push(word);
          !temp.includes(otherword) && temp.push(otherword);
        }
      }
    });
    anagrams[sortedWord] = temp;
    temp = [];
  });
  console.log(
    Object.values(anagrams)
      .map((anagram) => anagram.join(" "))
      .join(" ")
  );
};
anagramFinder(["god", "dog", "gdo", "act", "cat"]);
