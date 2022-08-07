const fib=(n)=>{
if(n===1 || n===2)
return 1

let first = 1
let second =1
let result = 0

for(let i=3;i<n+1;i++){
    result=first+second
    first=second
    second=result
}
return result
}
console.log(fib(1))