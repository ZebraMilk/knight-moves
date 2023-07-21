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
const gameBoard = NewBoard();
const knightStart = placeKnight(4, 4);
console.log(knightStart);

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
  gameBoard[BOARDSIZE - y - 1][x] = 'start';
  const knightStart = NewNode(x, y, 'start');
  return knightStart;
}

function setTarget(x = 0, y = 7) {
  gameBoard[BOARDSIZE - 1 - y][x] = 'end';
  let target = NewNode(x, y, 'end');
  return target;
}

// build a new tree with knightStart as the root

function visitNode(node) {
  gameBoard[BOARDSIZE - 1 - node.y][node.x] = true;
  return (node.visited = true);
}

// make the tree of moves from the knight start node
function buildTree(root = knightStart) {}

// breadth-first traversal
function levelOrder(fn) {
  let queue = [];
  let result = [];
  let moveCount = 0;

  // push the root node onto the tree
  queue.push(knightStart);

  // repeat until queue is empty
  while (queue.length) {
    // take a node from the front of the queue
    let current = queue.shift();
    // if current is the target, return that node
    if (current.x === target.x && currrent.y === target.y) {
      moveCount++;
      return current;
    }
    // visit current to remove it from further calculations
    visitNode(current);
    // populate valid children
    addChildren(current);
    // add children to the queue
    current.children.forEach((child) => queue.push(child));
    // check if callback was provided
    fn ? result.push(fn(current)) : result.push(current);
  }
  return result;
}

/* Utilities */
// takes a node and populates the children with new nodes
function addChildren(node) {
  return (node.children = moveOptions
    // check if each value is legal before adding it to the array of children
    .filter((option) => {
      let newX = node.x + option[0];
      let newY = node.y + option[1];
      let childSquare = gameBoard[BOARDSIZE - 1 - newY][x];
      // only return if it's a valid move and not yet visited (will add end)
      return (
        isLegal(newX, newY) &&
        (gameBoard[BOARDSIZE - 1 - newY][newX] === false ||
          gameBoard[BOARDSIZE - 1 - newY][newX] === 'end')
      );
    })
    // translate each move tuple into a node
    .map((move) => {
      return NewNode(node.x + move[0], node.y + move[1]);
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

console.log(gameBoard);
const testNode = NewNode(4, 4);
console.log(testNode);
const newNode = NewNode(4, 4);
visitNode(5, 6);
addChildren(newNode);
console.log(newNode);

console.log(levelOrder());

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
