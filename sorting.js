let a = [1, 3, 2, 7, 4, 9, 6];

const sort = (Arr) => {
  const swap = (a, b) => {
    let temp = Arr[a];
    Arr[a] = Arr[b];
    Arr[b] = temp;
  };

  for(let i=0;i<Arr.length;i++){
      for(let j=i+1;j<Arr.length;j++){
          if(Arr[i]>Arr[j]){
              swap(i,j)
          }
      }
  }
  return Arr
};
var myArray = [13, 50, 2, 45, -1, 74, 11];
var arreySorted = sort(myArray);
console.log(arreySorted)
function quickSortAlgo(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;
    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return newArray.concat(quickSortAlgo(left), pivot, quickSortAlgo(right));
  }
}
var myArray = [13, 50, 2, 45, -1, 74, 11];
var arreySorted = quickSortAlgo(myArray);
console.log(arreySorted);

function insertion_Sort_algo(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else if (arr[i] > arr[i - 1]) {
      continue;
    } else {
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}
console.log(insertion_Sort_algo([44, 20, 26, 54, -9, 41, 16]));
