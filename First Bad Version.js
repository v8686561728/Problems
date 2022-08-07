// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

const find = (start, n) => {
  let middleTerms = Math.round((n - start) / 2);
  let middleIndex = start + middleTerms;
  console.log(start, n);
  console.log(middleTerms, middleIndex);
  console.log("-------------------------------");
  if (middleTerms === 1) {
    if (middleIndex >= 7 && middleIndex + 1 >= 7) {
      return middleIndex;
    } else {
      return middleIndex + 1;
    }
  }
  if (middleIndex >= 7) {
    return find(start, middleIndex);
  } else {
    return find(middleIndex, n);
  }
};

console.log(find(0, 30));
