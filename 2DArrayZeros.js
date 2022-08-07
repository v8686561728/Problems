//Given a two-dimensional array, if any element within is zero, make its whole row and column zero

let make_zeroes = function(matrix) {
    if (!matrix || matrix.length === 0) {
      return;
    }
  
    let zero_rows = new Set();
    let zero_cols = new Set();
  
    let rows = matrix.length;
    let cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          if (!zero_rows.has(i)) {
            zero_rows.add(i);
          }
          if (!zero_cols.has(j)) {
            zero_cols.add(j);
          }
        }
      }
    }
  
    zero_rows.forEach(function(r) {
      for (let c = 0; c < cols; c++) {
        matrix[r][c] = 0;
      }
    });
  
    zero_cols.forEach(function(c) {
      for (let r = 0; r < rows; r++) {
        matrix[r][c] = 0;
      }
    });
  };

  
  let print_matrix = function(m) {
    for (let l in m) {
      console.log(m[l]);
    } 
  };

  
  let matrix = [
  [1, 5, 45, 0, 81],
  [6, 7, 2, 82, 8],
  [20, 22, 49, 5, 5],
  [0, 23, 50, 4, 92],
  ];
  print_matrix(matrix);
  make_zeroes(matrix);
  console.log("");
  console.log("++++++ New Matrix +++++++");
  print_matrix(matrix);
  