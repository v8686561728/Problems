const anagrams = (data, local, l) => {
  if (data.length == local.length) {
    console.log(local.join(""));
  }

  for (let i = l; i < data.length; i++) {
    
    local.push(data[i]);
    anagrams(data, local, i + 1);
    // local.pop();
  }
};

const main = (data) => {
  const sortData = data.split("").sort();
  const local = [];
  anagrams(sortData, local, 0);
};
main("ABCAB");
