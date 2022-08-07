const { fstat } = require("fs")

function height(root){
     
    // base condition when binary tree is empty
    if(root == null)
        return 0
    return Math.max(height(root.left), height(root.right)) + 1
}
 
// function to check if tree is height-balanced or not
function isBalanced(root){
     
    // Base condition
    if(root == null)
        return true
 
    // for left and right subtree height
    let lh = height(root.left)
    let rh = height(root.right)
 
    // allowed values for (lh - rh) are 1, -1, 0
    if (Math.abs(lh - rh) <= 1 && isBalanced(
    root.left)== true && isBalanced( root.right) == true)
        return true
 
    // if we reach here means tree is not
    // height-balanced tree
    return false
}
