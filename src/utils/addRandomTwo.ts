export function addRandomTwo(board: number[]): {
  board: number[];
  status: "Playing" | "Game Over";
} {
  const emptyIndices = board
    .map((val, index) => (val === 0 ? index : null))
    .filter((val): val is number => val !== null);

  if (emptyIndices.length === 0) return { board, status: "Game Over" }; // no empty cell ,therefor game over

  const randomIndex =
    emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

  const newBoard = [...board];
  newBoard[randomIndex] = 2;
  return { board: newBoard, status: "Playing" };
}
