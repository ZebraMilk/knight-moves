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
  const children = [];

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
    gameBoard[i] = [false, false, false, false, false, false, false, false];
  }
  // console.log(gameBoard);
  return gameBoard;
}

// default starting position for now
// have humans put in the x,y like normal
// but no humans... just me...
function placeKnight(x = 5, y = 5) {
  // access the bottom row first, then the column of that row, reverse y and x
  gameBoard[BOARDSIZE - y - 1][x] = true;
  const knightStart = NewNode(x, y, true);
  return knightStart;
}

function getTarget(x = 0, y = 7) {
  // gameBoard(y - 1, x - 1) = 'target';
  let target = NewNode(x, y, 'end');
  return target;
}

// build a new tree with knightStart as the root

function visitNode(x, y) {
  return (gameBoard[BOARDSIZE - y - 1][x] = true);
}

// breadth-first traversal
function levelOrder(fn) {
  let queue = [];
  let result = [];

  // push the root node onto the tree
  queue.push(start);

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
function addChildren(node) {
  return (node.children = moveOptions
    // check if each value is legal before adding it to the array of children
    .filter((option) => {
      let newX = node.x + option[0];
      let newY = node.y + option[1];
      // currently only return if it's a valid move and not yet visited
      return (
        isLegal(newX, newY) && gameBoard[BOARDSIZE - newY - 1][newX] === false
      );
    })
    // translate each move into coordinates in a tuple
    .map((move) => {
      return [node.x + move[0], node.y + move[1]];
    }));

  // .map((move) => {
  //   return NewNode(x + move[0], y + move[1]);
  // });
}

function isLegal(x, y) {
  if (x < BOARDSIZE && x >= 0 && y < BOARDSIZE && y >= 0) {
    return true;
  } else {
    return false;
  }
}

function find(x, y) {
  // returns true if the [x, y] is in the knight's move history, or if the node is visited, or if that board square is visited
  return move;
}

// only 7 possible child moves, max, can't go back from whence we came

function makeMoves(current = knightStart) {
  {
    // remove that child from the options in this knight's path, so he doesn't retrace his steps
  }
}

const gameBoard = NewBoard();
console.log(gameBoard);
const testNode = NewNode(4, 4);
console.log(testNode);
const newNode = NewNode(4, 4);
visitNode(5, 6);
addChildren(newNode);
console.log(newNode);

// console.log(Board.NewBoard());

// console.log(gameBoard[0][0]);

// console.log(testNode);
// console.log(NewNode(1, 1));
// console.log(NewNode(3, 4));

// visitNode(0, 0);
// visitNode(1, 0);
// visitNode(2, 0);
// visitNode(3, 0);
// visitNode(4, 0);
// visitNode(5, 0);
// visitNode(6, 0);
// visitNode(7, 0);
