// class Node{
//     Constructor(){
// this.data=null
// this.next=null
//     }
// }

// let A= new Node()
// A.data=0
// let B= new Node()
// A.next=B
// console.log(A)
const node = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 5,
      left: { value: 9, left: null, right: null },
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: { value: 10, left: null, right: null },
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

let result = "";
let max_level=0
const view = (data,level) => {
  if (data === null) {
    return;
  }
  if (max_level < level)
    {
      result += data.value;
        max_level = level;
    }
  view(data.right, level+1);
  view(data.left, level+1);
  
  return result;
};

let buttom = ''
const bottomview = (data) => {
    if(data===null)
    return
    if (data.left === null && data.right==null) {
        buttom+=data.value
      return
    }
    bottomview(data.left);
    bottomview(data.right); 
    return buttom;
  };
console.log(view(node,1));
