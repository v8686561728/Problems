/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const repeat = (str, n) => {
    let res = "";
    for (let i = 0; i < n; i++) {
      res = res + str;
    }
    return res;
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      let num = "";
      while (stack[stack.length - 1] != "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      while (stack.length && Number.isInteger(parseInt(stack[stack.length - 1]))){
        num = stack.pop() + num;}
        stack.push(repeat(str, num));
    }
   
  }
  return stack.join("");
};

decodeString("3[a2[c]]");
