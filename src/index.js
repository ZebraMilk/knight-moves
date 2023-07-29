import './style.css';

console.log('Packs loaded and stuff.');
// global constants
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
const knightStart = placeKnight(0, 0);
const targetSquare = getTarget(7, 7);

function NewNode(x, y, parentNode = null, visited = false) {
  const name = `${x}, ${y}`;
  const xIndex = x;
  const yIndex = y;
  const parent = parentNode;
  let children = [];

  return {
    name,
    xIndex,
    yIndex,
    parent,
    children,
    visited,
  };
}

function placeKnight(x = 4, y = 4) {
  // access the bottom row first, then the column of that row, reverse y and x
  gameBoard[y][x] = 'start';
  const startingSquare = NewNode(x, y, null, 'start');
  return startingSquare;
}

function getTarget(x = 0, y = 0) {
  gameBoard[y][x] = 'end';
  const target = [x, y];
  return target;
}
// Initialize a board whose visited values are false
function NewBoard() {
  let gameBoard = Array(BOARDSIZE);
  for (let i = 0; i < BOARDSIZE; i++) {
    gameBoard[i] = [false, false, false, false, false, false, false, false];
  }
  return gameBoard;
}

function buildMoveTree(start) {
  let queue = [];
  let result = [];
  let path = [];

  queue.push(start);
  console.log(queue);
  while (queue.length > 0) {
    // take from front of queue
    let current = queue.shift();
    if (_checkTarget(current, targetSquare)) {
      _getPath(current, start);
      console.log(path.reverse());
    }
    // visit it
    _visit(current);
    // populate its children
    _addChildren(current);
    // add children to the queue
    current.children.forEach((child) => {
      queue.push(child);
    });
    result.push(current);
  }
  // takes an expecting parent and populates its children with new nodes
  function _addChildren(parent) {
    // 5 checks
    parent.children = moveOptions
      // check if each move is legal before adding it to the array of children
      .filter((option) => {
        let newX = parent.xIndex + option[0];
        let newY = parent.yIndex + option[1];
        // only return if it's a valid move and not yet visited
        return _isLegal(newX, newY) && !_isVisited(newX, newY);
      })
      // translate each remaining move into a node with current node as parent
      .map((move) => {
        return NewNode(
          parent.xIndex + move[0],
          parent.yIndex + move[1],
          parent
        );
      });
    parent.children = _checkQueue(parent);
    parent.children = _checkResult(parent);
    return parent;
  }

  function _getPath(current) {
    path.push(current);
    if (current.parent !== null) {
      return _getPath(current.parent);
    }
  }

  function _checkTarget(current, target) {
    if (current.xIndex === target[0] && current.yIndex === target[1]) {
      console.log('Target found!!! ');
      console.log(current);
      return true;
    }
  }

  function _checkQueue(current) {
    for (let i = 0; i < queue.length; i++) {
      current.children = current.children.filter((child) => {
        return child.name !== queue[i].name;
      });
    }
    return current.children;
  }

  function _checkResult(current) {
    for (let i = 0; i < result.length; i++) {
      current.children = current.children.filter((child) => {
        return child.name !== result[i].name;
      });
    }
    return current.children;
  }

  // Utilities

  // check if move is on the board
  function _isLegal(x, y) {
    if (x < BOARDSIZE && x >= 0 && y < BOARDSIZE && y >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function _isVisited(x, y) {
    if (gameBoard[y][x] === false || gameBoard[y][x] === 'end') {
      return false;
    } else {
      return true;
    }
  }

  function _visit(node) {
    if (node.visited === 'start') {
      return;
    }
    node.visited = true;
    gameBoard[node.yIndex][node.xIndex] = true;
    return node;
  }

  return { start, result };
}
// helper function to get "accurate" y value
// sets the 0 index to the "bottom" row of the board
function truthY(y) {
  return BOARDSIZE - 1 - y;
}

// Driver functions

const newStart = buildMoveTree(knightStart);
console.log(newStart.result);

// console.log(gameBoard);
