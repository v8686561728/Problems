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

const commonAnchestor=(main,a,b)=>{
    if(main==null)
    return
 
    if(main.value==a )
    return main.value

    if(main.value==b)
    return main.value
   if(main.value==null)
   return null

    let leftnode=commonAnchestor(main.left,a,b)
    let rightNode=commonAnchestor(main.right,a,b)
    if(leftnode!=null && rightNode!=null){
return main.value
    }
 
    return (leftnode != null)? leftnode: rightNode;
    
}
 
const present=(node,k)=>{
    if (node == null)
    return false;
if (node.value == k || present(node.left, k) ||  present(node.right, k))
    return true;
return false;


}

const check=(treenode,a,b)=>{
 if(treenode==null)
 return null

 if((a!=null|undefined && present(treenode,a)) && (b!=null|undefined && present(treenode,b))){
    console.log(commonAnchestor(treenode,a,b))
 }else{
     console.log(null)
 }
}

      
check(tree,5,0)

 