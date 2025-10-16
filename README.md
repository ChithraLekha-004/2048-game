🎮 2048 Game

A modern implementation of the classic 2048 puzzle game, built using React, TypeScript, and Tailwind CSS.
Combine tiles with the same number to reach 2048 — plan your moves carefully!

✅ Features

Choose custom board size before starting the game

Smooth tile movement and merging using clean logic

Random tile generation only after valid moves

Score tracking and Game Over modal

Option to reset or change board size anytime

Responsive, clean UI built with Tailwind CSS

🧩 Gameplay Instructions

Start the game by selecting the board size (e.g., 4×4).

Use the arrow keys to move tiles:

⬆️ Up

⬇️ Down

⬅️ Left

➡️ Right

When two tiles with the same number collide, they merge into one tile with their sum.

After every valid move, a new tile (2) appears in a random empty cell.

The goal is to create a tile with 2048.

The game ends when no more valid moves are possible.

⚙️ Installation & Running the Game
1. Clone the Repository
git clone https://github.com/ChithraLekha-004/2048-game.git
cd 2048-react-game

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev


Open http://localhost:5173
 in your browser (or your Vite default port).

🛠️ Tech Stack

React – Component-based UI

TypeScript – Static typing and clean logic

Tailwind CSS – Utility-first styling

Vite – Fast development environment

📝 Implementation Details
Board Representation

The board is a one-dimensional array representing an N×N grid.
For example, a 4×4 board is stored as an array of 16 elements.

Move Logic

Each direction (up, down, left, right) is implemented as a function that:

Shifts non-zero tiles

Merges equal adjacent tiles once per move

Tracks and updates the score

Tile Generation

After every valid move, one new tile with value 2 is added in a random empty cell.
New tiles are not added if the move had no effect on the board.

Game Over Check

If there are no empty tiles and no adjacent tiles that can merge,
the game status becomes “Game Over”, triggering a modal popup.

Custom Hook

A reusable hook useArrowKeys() handles keyboard events cleanly.

UI Components

BoardSizeModal – To choose board size before game starts

GameBoard – Displays the board, score, and reset options

GameOverModal – Shows final score and restart option