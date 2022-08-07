function stringPermutation(str, left, result) {
  const length = str.length-1
  const swap = (a, b) => {
    let temp = str[a];
    str[a] = str[b];
    str[b] = temp;
  };
  if (left == length && !result.has(str.join("")))
    result.add(str.join(""));
  else {
    for (let i = left; i <= length ; i++) {
      swap(left, i);
      stringPermutation(str, left + 1 , result);
      swap(left, i); //swap back for backtracking
    }
  }
  return result;
}0

function main() {
  let str = "ABC".split("");
  let result = new Set();
  let res = stringPermutation(str, 0,  result);
  console.log(res);
}

main();
