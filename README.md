---
aliases:
tags:
creation date: 2023-07-15 19:34
modification date: 2023-07-15 19:34:52
---

# (Working on our) Knight Moves

## Project Playlist

https://www.youtube.com/watch?v=EfhMt580b44

https://www.youtube.com/watch?v=2D5tS3cdwX8

## Intent

What's the point?

Moving past Binary Trees and into trees with greater numbers of children, searching and traversing become a bit more complicated.

We (my little duck and I) must determine the minimum possible moves a chess Knight can make to arrive at the destination square. On a classic, 8x8 board, every square is reachable from any initial position. Not only do we need to find the minimum *number* of moves, but also track and log the sequence of those moves.

There's a bit of graph theory involved here, just like in Binary trees, just the structure get a little more complicated with more than two children. 

### Learning Goals

- [ ] Decide which data structure to use (probably trees, since that's what the past few lessons were about)
- [ ] Implement an algorithm that builds a tree of Nodes laying out the knight's future move destiny
- [ ] Find the leaf child of the desired ending square
- [ ] Log the moves along that path
- [ ] Make a UI
- [ ] Have user input, click the destination square to highlight it,
- [ ] Animate the knight token across the board
- [ ] Bonus: Make the board dimensions flexible
  - [ ] Need to find the n-dimension boards where every square is accessible
- [ ] Bonus bonus: Make a 3-D board...


I built this project to dig into algorithms and data structures. Thinking about what structure would work best, how to search for the values and find the path.




Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Project Requirements](#project-requirements)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Tests



## Project Requirements

Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

    knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
    knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
    knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

> 1. Put together a script that creates a game board and a knight.
> 2. Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
> 3. Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
> 4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
>
> ```bash
> knightMoves([3,3],[4,3])
>   => You made it in 3 moves!  Here's your path:
>   [3,3]
>   [4,5]
>   [2,4]
>   [4,3]
> ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## Support

Here's how to support me

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

---

## Brainstorm and Planning

So there are a few things here

- gameBoard
  - possibly just an array of arrays? `Array(8).forEach(arr => arr.push(Array(8)))`
  - starting position of the knight.
    - for now, just have him start at the same spot, but assign it to a variable

Knight has a starting positiong, `[x, y]`, and we can make a tree of possible moves from there.

that becomes the root.

there should be 63 leaf nodes on this tree, and each node should be unique

!! IMPORTANT

The gameBoard array has inverse indices if I want to log/print it and have it make sense

x is the index in the subarray, -1 to convert to 0-indexing
y is the index in the actual array, -1 to convert to 0-indexing



- UI
  - boardState
  - knightStart
  - knightEnd


### Board

Perhaps set this up like an array of stuffs
How do I track the indexes of moves?
64 squares on the board
each square should be a leaf node eventually

Should I make the board first and populate it with Nodes?
64 nodes with children, coordinates, visited boolean

### Node

Each node in this tree will have 8 children, as a tuple:
- x coordinate
- y coordinate
- visited boolean
- array of possible subsequent moves

### Destination



### Constructing the tree

First need to build the tree of possible moves

#### Visiting squares

So rather than populating a 'board' of squares, just keep track of the moves as children?

I can think of two ways to do this.

have an array of arrays that represent each square
each square contains an object that contains whether the node has been visited yet
the board is empty, initially

So we're comparing the visited quality of the board square state in order to determine if it gets added as a child
Rather than search the tree for the node anywhere (O of n lg n?) we just index into the correct square of the gameboard to see if it's been visited?

Otherwise, if we want to add a child node, we have to traverse the entire tree and check if that node already exists?

See, this isn't that bad, only the existing tree gets searched, so it doesn't take too much more time or resources to find the value if it exists.



### Traversal

Breadth first traversal
implement a queue structure
check if the desired node is already visited, if not, then make it and visit it?

Make a `knightPath` array, with each entry being an `[x, y]` tuple, the coordinates of the previous moves
or it could be an array of the node objects in its path? possible more versatile if I want nodes to have other properties for the UI?

Not only do we have to traverse down the tree to find the desired ending position
We also have to move back up to the root and add the "moves" to the path array.
then possibly reverse it to get the actual move order?

### Problems

Which data structure to use here?
I think the weird list thing where there's a pointer to each possible next move resulting in finite leaf nodes?

Trie, but for moves? Here every move would have an array of 8 possible child moves

so each square on the board would be a node.
Starting at knightStart, we can build out the trie immediately such that each leaf node has a path to it from another node

```js
trieNode: {
children: [[x1,y1],[x2,y2]...], // ignore moves that are out of bounds
visited: false, // change to true once the current knight path takes her to that node
}
```

**Update** Nope, going to use a plain ol' tree for now. I think there's something cool about tries eventually, but it's not needed for this one.


- Translate the moves around the board array into human-readable chess language, and also adjust the indices to be human legible
  - Example: Navigate the arrays using 0-7, but the display and resulting array would read from 1-8

She is traversing in a sort of levelOrder, in order to track the moves closest to start first
So if later on, the knight could move to a node that has `visited` true, we can confidently rule it out as an option.

- use the array forEach to iterate, but also do recursion? how to recurse over 7 possible children?


- How to search the possible move options to find the ending square?
  - levelOrder traversal, yeah?
  - limit the moves to the actual gameboard

- How to track, in order of visiting, which squares have been touched in the traversal?
- how to make sure knight does not leave the board?
- Eliminate already visited squares from the tree
- Each move is an array with `[x, y]` coordinates of each subsequent move
- The final 'result' is an array with a sequence of moves: `[[x1, y1], [x2, y2], [x3, y3] ...]`

- Q: when do I want to translate the coordinates back to human legibility? 
  - I think at the very end might make the most sense...

### UI thoughts

wait until the result array is "published", then animate the knight token to the different squares on the gameBoard until arriving at the destination

## Bob Seger

Mmm, night moves (Mmm)  
Night moves (Night moves)  
Night moves (Yeah)
Night moves (I remember)  
Night moves (Ah, sure remember the night moves)  
Night moves (Ain't it funny how you remember?)
Night moves (Funny how you remember)  
Night moves (I remember, I remember, I remember, I remember)  
Night moves (Oh, oh, oh)  
Night moves (We were working, working and practicing)  
Night moves (Working and practicing)  
Night moves (Oh for the night moves, night moves)  
Night moves (Oh)  
Night moves (I remember, yeah yeah yeah)  
Night moves (I remember, ooh)  
Night moves (I remember, Lord I remember)  
Night moves (Lord I remember, huh huh)  
Ooh  
Oh yeah yeah yeah  
Uh huh, uh huh  
I remember, I remember
