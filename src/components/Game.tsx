import { useState } from "react";
import BoardSizeModal from "./BoardSizeModal";
import GameBoard from "./GameBoard";

const Game = () => {
  const [boardSize, setBoardSize] = useState<number | null>(null);

  const handleBoardSizeConfirm = (size: number) => {
    setBoardSize(size);
  };

  return (
    <div className="h-screen overflow-y-scroll flex items-center justify-center bg-gray-100">
      {!boardSize && <BoardSizeModal onConfirm={handleBoardSizeConfirm} />}

      {boardSize && (
        <GameBoard size={boardSize}/>
      )}
    </div>
  );
};

export default Game;
