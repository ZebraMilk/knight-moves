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

// WORKS!
function NewNode(x, y, visited = false) {
  const children = moveOptions
    .filter((option) => {
      // check if each value is legal before adding it to the array of children?
      // avoid populating empty ordered pairs?
      let newX = x + option[0];
      // console.log(`Initial: ${x}\nMove: ${option[0]}\nResult: ${newX}`);
      let newY = y + option[1];
      // console.log(`Initial: ${y}\nMove: ${option[1]}\nResult: ${newY}`);
      // console.log(isLegal(newX, newY));

      // currently only return if it's a valid move
      // can also check the gameBoard to see if it's been visited yet?
      return isLegal(newX, newY);
    })
    .map((move) => {
      return [x + move[0], y + move[1]];
    });

  return {
    x,
    y,
    visited,
    children,
  };
}

// Initialize a board whose visited values are false
function NewBoard() {
  let gameBoard = Array(8);
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = Array(
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    );
  }
  console.log(gameBoard);
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
    // visit each child if they haven't been visited yet

    // check if callback was provided
    fn ? result.push(fn(current)) : result.push(current);
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

const test = NewBoard();
console.log(test);
console.log(test[0][0]);

const testNode = NewNode(7, 7);
console.log(testNode);
console.log(NewNode(1, 1));
