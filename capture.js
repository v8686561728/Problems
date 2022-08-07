var solve = function (board) {
  let m = board.length;
  let n = board[0].length;
  const check = (i, j) => {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || board[i][j] != "O") return;

    board[i][j] = "T";
    check(i - 1, j); //up
    check(i, j - 1); //left
    check(i + 1, j); //down
    check(i, j + 1); //right
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == m - 1 || j == 0 || j == n - 1)
      ) {
        check(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }
      if (board[i][j] == "T") {
        board[i][j] = "O";
      }
    }
  }
  return board;
};

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
solve(board);
