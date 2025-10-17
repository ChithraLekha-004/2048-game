import { addRandomTile, emptyIndicesCheck } from "./addRandomTile";
import hasPossibleMoves from "./hasPossibleMoves";

export const moveUp = (
  board: number[],
  size: number,
  score: number
): {
  gameStatus: { board: number[]; status: "Playing" | "Game Over" };
  score: number;
} => {
  const newBoard = [...board];
  const merged: Boolean[] = Array(size * size).fill(false);
  let moved = false;
  for (let i = 0; i < size; i++) {
    for (let j = i + size; j < size * size; j += size) {
      if (newBoard[j] == 0) continue;
      else {
        for (let k = j - size; k >= 0; k -= size) {
          if (newBoard[k] == 0) {
            newBoard[k] = newBoard[j];
            newBoard[j] = 0;
            j = k;
            moved = true;
          } else if (newBoard[k] == newBoard[j] && !merged[k]) {
            newBoard[k] = newBoard[k] * 2;
            score += newBoard[k];
            merged[k] = true;
            newBoard[j] = 0;
            break;
          }
        }
      }
    }
  }
  if (!moved && !merged.includes(true)) {
    if(emptyIndicesCheck(newBoard).length === 0 && !hasPossibleMoves(newBoard)){
      return { gameStatus: { board, status: "Game Over" }, score };
    }
    return { gameStatus: { board, status: "Playing" }, score };
  }
  return { gameStatus: addRandomTile(newBoard), score };
};

export const moveDown = (
  board: number[],
  size: number,
  score: number
): {
  gameStatus: { board: number[]; status: "Playing" | "Game Over" };
  score: number;
} => {
  const newBoard = [...board];
  const merged: boolean[] = Array(size * size).fill(false);
  let moved = false;

  for (let i = 0; i < size; i++) {
    for (let j = (size - 2) * size + i; j >= 0; j -= size) {
      if (newBoard[j] === 0) continue;
      else {
        for (let k = j + size; k < size * size; k += size) {
          if (newBoard[k] === 0) {
            newBoard[k] = newBoard[j];
            newBoard[j] = 0;
            j = k;
            moved = true;
          } else if (newBoard[k] === newBoard[j] && !merged[k]) {
            newBoard[k] *= 2;
            score += newBoard[k];
            merged[k] = true;
            newBoard[j] = 0;
            break;
          } else break;
        }
      }
    }
  }
  if (!moved && !merged.includes(true)) {
    if(emptyIndicesCheck(newBoard).length === 0 && !hasPossibleMoves(newBoard)){
      return { gameStatus: { board, status: "Game Over" }, score };
    }
    return { gameStatus: { board, status: "Playing" }, score };
  }
  return { gameStatus: addRandomTile(newBoard), score };
};

export const moveLeft = (
  board: number[],
  size: number,
  score: number
): {
  gameStatus: { board: number[]; status: "Playing" | "Game Over" };
  score: number;
} => {
  const newBoard = [...board];
  const merged: boolean[] = Array(size * size).fill(false);
  let moved = false;

  for (let i = 0; i < size; i++) {
    // row
    for (let j = i * size + 1; j < (i + 1) * size; j++) {
      if (newBoard[j] === 0) continue;
      else {
        for (let k = j - 1; k >= i * size; k--) {
          if (newBoard[k] === 0) {
            newBoard[k] = newBoard[j];
            newBoard[j] = 0;
            j = k;
            moved = true;
          } else if (newBoard[k] === newBoard[j] && !merged[k]) {
            newBoard[k] *= 2;
            score += newBoard[k];
            merged[k] = true;
            newBoard[j] = 0;
            break;
          } else break;
        }
      }
    }
  }
  if (!moved && !merged.includes(true)) {
    if(emptyIndicesCheck(newBoard).length === 0 && !hasPossibleMoves(newBoard)){
      return { gameStatus: { board, status: "Game Over" }, score };
    }
    return { gameStatus: { board, status: "Playing" }, score };
  }
  return { gameStatus: addRandomTile(newBoard), score };
};

export const moveRight = (
  board: number[],
  size: number,
  score: number
): {
  gameStatus: { board: number[]; status: "Playing" | "Game Over" };
  score: number;
} => {
  const newBoard = [...board];
  const merged: boolean[] = Array(size * size).fill(false);
  let moved = false;

  for (let i = 0; i < size; i++) {
    // row
    for (let j = (i + 1) * size - 2; j >= i * size; j--) {
      if (newBoard[j] === 0) continue;
      else {
        for (let k = j + 1; k < (i + 1) * size; k++) {
          if (newBoard[k] === 0) {
            newBoard[k] = newBoard[j];
            newBoard[j] = 0;
            j = k;
            moved = true;
          } else if (newBoard[k] === newBoard[j] && !merged[k]) {
            newBoard[k] *= 2;
            score += newBoard[k];
            merged[k] = true;
            newBoard[j] = 0;
            break;
          } else break;
        }
      }
    }
  }
  if (!moved && !merged.includes(true)) {
    if(emptyIndicesCheck(newBoard).length === 0 && !hasPossibleMoves(newBoard)){
      return { gameStatus: { board, status: "Game Over" }, score };
    }
    return { gameStatus: { board, status: "Playing" }, score };
  }
  return { gameStatus: addRandomTile(newBoard), score };
};
