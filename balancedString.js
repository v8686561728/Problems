// Smallest substring with each letter occurring both in uppercase and lowercase

function checkBalanced(s){
    let char=s.split('')
    for(let i=0;i<char.length;i++){
        if(char[i].charCodeAt()>=65 && char[i].charCodeAt()<=90){
            if(!(char.indexOf(char[i].toLowerCase())>-1))
           return false
        }else{
            if(!(char.indexOf(char[i].toUpperCase())>-1))
            return false
        }
    }
    return true

}

// Function to find smallest length substring
// in the given string which is balanced
function   shortestBalancedSubstr(s) { // 'bB'
    for (let len=2; len <= s.length; len++) {
        for (let i=0; i <= s.length-len; i++) {
            let check = checkBalanced( s.substr(i,len), i, i+len-1);
            if (check) {
                return s.substr(i,len);
            }
        }
    }
    return "-1";
}

 
// Given string
let s = "azABaabba";

console.log(shortestBalancedSubstr(s))
