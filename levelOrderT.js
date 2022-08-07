//Get height of the tree
const treeHeight = (node) => {
    //If null return 0
    if(node === null){
      return 0;
    }
    
    //Get left sub tree height
    const leftHeight = treeHeight(node.left);
    
    //Get right sub tree height
    const rightHeight = treeHeight(node.right);
    
    //Return the max of them
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  
  //Print all the nodes
  const printNode = (node, level) => {
    //If null return
    if(node === null){
      return;
    }
    
    //If at node print the data
    if(level === 1){
      console.log(node.key)
    }
    
    //Else recursively print all the nodes at each level
    if(level > 1){
      printNode(node.left, level - 1)
      printNode(node.right, level - 1);
    };
  }
  
  const levelOrderTraversal = (node) => {
    const height = treeHeight(node);
    
    //Print node at each level
    for(let i = 1; i <= height; i++)  
    { 
      printNode(node, i); 
    } 
  }

  let tree={
    value:3,
    left:{
value:4,
left:{
    value:2,
    left:null,
    right:null,
},
right:{
    value:1,
    left:null,
    right:null,
}

    },
    right:{
        value:5,
        left:{
            value:7,
            left:null,
            right:null
        },
        right:{
            value:8,
            left:{
                value:9,
                left:null,
                right:null
            },
            right:{
                value:0,
                left:null,
                right:null
            }
        },
    }
}

const levelOT=(tree)=>{
  let node=[]
  node.push(tree)
let level=[]
let res=[]
  while(node.length>0){
    let cur=node.shift()
if(cur===null){
  if(level.length)res.push(level)
  level=[]
  continue
}
    level.push(cur.value)
    if(cur.left){
      node.push(cur.left)
    }
    if(cur.right){
      node.push(cur.right)
    }
    node.push(null)
  }
  console.log(res)
}



levelOT(tree)