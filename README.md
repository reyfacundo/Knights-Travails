# ♞ Knight Moves – JavaScript Chess Pathfinder

This is a simple JavaScript implementation of the knight's shortest path problem on a standard 8×8 chessboard. Given a start and end coordinate, the algorithm finds the shortest sequence of valid knight moves to reach the destination using **Breadth-First Search (BFS).**

---

## 🧠 How it Works

- The board is represented as an 8×8 grid.
- `findNeighbors(start)` returns all valid knight moves from a given position.
- `knightMoves(start, end)` performs BFS to explore possible moves.
- When the destination is reached, the path is reconstructed by following `previous` pointers.

---

## 🧪 Example Usage

```js
knightMoves([3, 3], [7, 0]);
```

**Console output:**

```
You made it in 3 moves! Here's your path:
[ 3, 3 ]
[ 4, 1 ]
[ 5, 2 ]
[ 7, 0 ]
```

---

## ▶️ How to Run

1. Copy the code into a `.js` file.
2. Run it in your browser console or with Node.js.
3. Call `knightMoves(start, end)` using two valid board positions.

---
