const gcd = (a, b) => {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return b;
};

const lcm = (a, b) => {
  const c = gcd(a, b);
  return (a * b) / c;
};

const fib = (n) => {
  let first = 0;
  let second = 1;
  while (n != 0) {
    console.log(second);
    let temp = second
    second = first + second;
    first = temp;
    n--;
  }
};
// let dataArr = [0,1,2,3,4,5,6,7,8,9]
// console.log(dataArr.splice(1,1))
// console.log(dataArr)
// console.log(dataArr.slice(1,6))
function bubblesort (a,N)
{
var i=j=v=0;
for (i=1; i<N; i++)
{
v = a[i];
j = i;
while (j>0 && a[j-1]>v)
{
a[j] = a[j-1];
j--;
};
a[j] = v;
}
};
var x = [9,4,5,2,1,6,7,0,3];
console.log("Input before bubble sort: " +x);
bubblesort(x,9);
console.log("Input after bubble sort: " +x);
