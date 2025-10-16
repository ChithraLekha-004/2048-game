import hasPossibleMoves from "./hasPossibleMoves";

export function addRandomTwo(board: number[]): {
  board: number[];
  status: "Playing" | "Game Over";
} {
  let emptyIndices = emptyIndicesCheck(board);

  if (emptyIndices.length === 0 && !hasPossibleMoves(board)) return { board, status: "Game Over" }; // no empty cell ,therefor game over

  const randomIndex =
    emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

  const newBoard = [...board];
  newBoard[randomIndex] = 2;
  emptyIndices = emptyIndicesCheck(newBoard);
//   console.log(emptyIndices,hasPossibleMoves(board))
  return {
    board: newBoard,
    status:emptyIndices.length === 0 && !hasPossibleMoves(newBoard)?"Game Over":"Playing",
  };
}

export const emptyIndicesCheck = (board: number[]) => {
  return board
    .map((val, index) => (val === 0 ? index : null))
    .filter((val): val is number => val !== null);
};
