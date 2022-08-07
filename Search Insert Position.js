// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const nums = [1,3,5,6]
const target = 7;
const search = (start, end,pre) => {
   
  let middle = Math.round((start + end) / 2);
if(nums[middle]===target){
    return middle
}
if(pre===middle){
    return middle
}

  if (nums[middle] > target) {
    return search(start, middle,middle);
  } else {
    return search(middle, end,middle);
  }
  
};
console.log(search(0,4,-1))