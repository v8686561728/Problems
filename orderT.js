const InOrderTraverse = (node) => {
    if (node !== null) {
      //Traverse the left subtree
      InOrderTraverse(node.left);
      
      //Print the node
      console.log(node.key);
      
      //Traverse the right subtree
      InOrderTraverse(node.right);
    }
   };
   const PreOrderTraverse = (node) => {
    if (node !== null) {
      //Print the node
      console.log(node.key);
      
      //Traverse the left subtree
      PreOrderTraverse(node.left);
      
      //Traverse the right subtree
      PreOrderTraverse(node.right);
    }
 };
 const PostOrderTraverse = (node) => {
    if (node !== null) {
      //Traverse the left subtree
      PostOrderTraverse(node.left);
      
      //Traverse the right subtree
      PostOrderTraverse(node.right);
      
      //Print the node
      console.log(node.key);
    }
 };