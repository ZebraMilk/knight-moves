import './style.css';

console.log('Packs loaded and stuff.');

const moveOptions = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

const BOARDSIZE = 8;
const knightStart = [5, 4];

function NewNode(x, y) {
  return {
    x,
    y,
    children: moveOptions.forEach((coord) => {
      return [coord[0] * x, coord[1] * y];
    }),
  };
}

function NewBoard() {
  let gameBoard = Array(8);
  gameBoard.forEach((arr) => arr.push(Array(8)));
  return gameBoard;
}

function newSquare(x, y, visited = false) {
  let square = {
    x,
    y,
    visited,
  };
  return square;
}

function placeKnight(x, y) {
  let gameBoard = NewBoard();
  gameBoard[y - 1][x - 1] = 'knightStart';
  const knightStart = [x, y];
  return knightStart;
}
// build a new tree/trie with knightStart as the root

function find(x, y) {
  // returns true if the [x, y] is in the knight's move history
  return move;
}

function levelOrder(fn) {
  // breadth-first traversal

  let queue = [];
  let result = [];

  // push the root node onto the tree
  queue.push(treeRoot);

  // repeat until queue is empty
  while (queue.length) {
    // take a node from the front of the queue
    let current = queue.shift();
    // check for left/right children
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
    // check if callback was provided
    fn ? result.push(fn(current.data)) : result.push(current.data);
  }
  return result;
}

/* Utilities */

function isLegal(x, y) {
  if (x >= BOARDSIZE || x < 0 || y >= BOARDSIZE || y < 0) {
    return false;
  } else {
    return true;
  }
}

// only 7 possible child moves, max, can't go back from whence we came

function makeMoves(current = knightStart) {
  if (current.child.visited === true) {
    // remove that child from the options in this knight's path, so he doesn't retrace his steps
  }
}

// console.log(Board.NewBoard());

const test = Board();
console.log(test);
const testBoard = test.NewBoard();
console.log(testBoard);
