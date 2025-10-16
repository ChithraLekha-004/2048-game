const hasPossibleMoves = (board: number[]) => {
  const size = Math.sqrt(board.length);
  for (let i = 0; i < size; i++) {
    for (let j = i * size; j < i * size + size; j++) {
      if (board[j] === 0) return true;
      if (j + 1 < i * size + size && board[j] === board[j + 1])
        return true;
      if (j + size < board.length && board[j] === board[j + size]) return true;
    }
  }
  return false;
};

export default hasPossibleMoves;
