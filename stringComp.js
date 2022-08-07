const compress = (word) => {
  let wordArray = word.split("");
  wordArray.sort();
  let result = "";
  let count = 1;
  wordArray.map((item, i) => {
    if (item === wordArray[i + 1]) {
      ++count;
    } else {
      result += item + count;
      count = 1;
    }
  });

  console.log(result);
};

compress("ababacascd");
