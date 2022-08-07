function solution(A) {
  let newA = Array.from(new Set(A));
  newA.sort((a, b) => a - b);

  for(let i = 0;i<newA.length;i++){
    if(newA[i]!=i+1){
        return i+1
    }
  }
  return newA.length+1
}
let test=(A)=>{
    let set = new Set(A)
for (i = 1; i < 1000000; i++) {
    if(!set.has(i)) return i;
  }
}
console.log(test([-1,-3]));
