
interface com {
    num : number
}
const test=(t:com)=>{
    return t.num
}
let num : number = 0;
let tes:com = {num:1}
console.log(test(tes))