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

count=0
const grandParent=(root,value)=>{
if(root==null)
return false

if(root.value==value)
return true

if(grandParent(root.left,value)||grandParent(root.right,value)){
   count++
    if(count==2)
    console.log(root.value)
    
    return true
}


return false


}

console.log(grandParent(tree,9))