const { curry } = require("lodash");

let tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 5, children: [] },
        { value: 4, children: [] },
        { value: 6, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 7,
          children: [
            { value: 9, children: [] },
            { value: 10, children: [] },
            { value: 11, children: [] },
          ],
        },
        { value: 8, children: [] },
      ],
    },
  ],
};

function* preOrderTraversal(node) {
  yield node;
  if (node.children.length) {
    for (let child of node.children) {
      yield* preOrderTraversal(child);
    }
  }
}

//   for (let node of preOrderTraversal(tree)) {
//   console.log(node.value)
//   }

const iterative = (tree) => {
  let node = [];
  node.push(tree);

  while (node.length > 0) {
    let curr = node.shift();
    console.log(curr.value);
    if (curr.children.length) {
      for (let i =curr.children.length-1; i >-1; i--) {
        node.push(curr.children[i]);
      }
    }
  }
};

iterative(tree);
