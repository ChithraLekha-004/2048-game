import React, { useEffect, useState } from "react";
import { addRandomTwo } from "../utils/addRandomTwo";
import { useArrowKeys } from "../hooks/useArrowKeys";
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/logic";
import GameOverModal from "./GameOverModal";

interface GameBoardProps {
  size: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ size }) => {
  const totalCells = size * size;
  const [board, setBoard] = useState<number[]>(Array(totalCells).fill(0));
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<"Playing" | "Game Over">(
    "Playing"
  );

  useEffect(() => {
    let newBoard = addRandomTwo(board).board;
    newBoard = addRandomTwo(newBoard).board;
    setBoard(newBoard);
  }, [size]);

  useArrowKeys({
    up: () => {
      const { gameStatus, score: newScore } = moveUp(board, size, score);
      setBoard(gameStatus.board);
      setScore(newScore);
      setGameStatus(gameStatus.status);
    },
    down: () => {
      const { gameStatus, score: newScore } = moveDown(board, size, score);
      setBoard(gameStatus.board);
      setScore(newScore);
      setGameStatus(gameStatus.status);
    },
    left: () => {
      const { gameStatus, score: newScore } = moveLeft(board, size, score);
      setBoard(gameStatus.board);
      setScore(newScore);
      setGameStatus(gameStatus.status);
    },
    right: () => {
      const { gameStatus, score: newScore } = moveRight(board, size, score);
      setBoard(gameStatus.board);
      setScore(newScore);
      setGameStatus(gameStatus.status);
    },
  });

  const handleReset = () => {
    const emptyBoard = Array(size * size).fill(0);
    let newBoard = addRandomTwo(emptyBoard).board;
    newBoard = addRandomTwo(newBoard).board;
    setBoard(newBoard);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 m-5">
      <h2 className="text-xl font-semibold">
        2048 Game ({size} × {size})
      </h2>

      <div className="flex items-center gap-2 bg-yellow-200 px-4 py-2 rounded-xl shadow-md">
        <span className="text-gray-700 font-medium">Score:</span>
        <span className="text-2xl font-bold text-gray-900">{score}</span>
      </div>

      <div
        className="grid gap-2 bg-gray-400 p-3 rounded-xl shadow-md"
        style={{
          gridTemplateColumns: `repeat(${size}, 80px)`,
          gridTemplateRows: `repeat(${size}, 80px)`,
        }}
      >
        {board.map((val, i) => (
          <div
            key={i}
            className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-semibold text-gray-700"
          >
            {val !== 0 ? val : ""}
          </div>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
      {gameStatus === "Game Over" && (
        <GameOverModal
          onPlayAgain={() => {
            handleReset(), setGameStatus("Playing");
          }}
          score={score}
        />
      )}
    </div>
  );
};

export default GameBoard;
