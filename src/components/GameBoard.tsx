import React, { useEffect, useState } from "react";
import { addRandomTwo } from "../utils/addRandomTwo";

interface GameBoardProps {
  size: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ size }) => {

  const totalCells = size * size;
  const [board, setBoard] = useState<number[]>(Array(totalCells).fill(0));
  useEffect(() => {
    let newBoard = addRandomTwo(board);
    newBoard = addRandomTwo(newBoard); 
    setBoard(newBoard);
  }, [size]);

  return (
    <div className="flex flex-col items-center gap-4 m-5">
      <h2 className="text-xl font-semibold">2048 Game ({size} × {size})</h2>

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
    </div>
  );
};

export default GameBoard;
