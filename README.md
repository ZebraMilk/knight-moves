---
aliases:
tags:
creation date: 2023-07-15 19:34
modification date: 2023-07-15 19:34:52
---

# Your-Project-Title

## Intent

What's the point?

### Learning Goals

- [ ] Goal 1
- [ ] Goal
- [ ] Goal
- [ ] Goal

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




- UI
  - boardState
  - knightStart
  - knightEnd




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