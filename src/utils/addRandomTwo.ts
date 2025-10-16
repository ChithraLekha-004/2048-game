export function addRandomTwo(board: number[]): number[] {

    const emptyIndices = board
    .map((val, index) => (val === 0 ? index : null))
    .filter((val): val is number => val !== null);

  if (emptyIndices.length === 0) return board; // no empty cell ,therefor game over

  const randomIndex =
    emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

  const newBoard = [...board];
  newBoard[randomIndex] = 2;
  return newBoard;
}
