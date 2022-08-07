const weight = (arr) => {
  arr.sort((a, b) => b - a);
  let sumA = arr[0];
  let sumB = 0;
  let n = 1;
  const sum = (data) => {
    let total = 0;
    for (let num in data) {
      total += data[num];
      
    }
    return total;
  };
  while (sumA < sum(arr)/2) {
    sumA = sum(arr.slice(0, n));
    sumB = sum(arr.slice(n, arr.length - 1));
    console.log(sumA,' ',sumB)
    n++;
  }
  console.log(arr.slice(0, n-1));
};

weight([3, 7, 5, 6, 2,1,1,1,1,1,1]);
