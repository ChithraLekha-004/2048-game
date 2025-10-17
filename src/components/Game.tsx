import { useState } from "react";
import BoardSizeModal from "./BoardSizeModal";
import GameBoard from "./GameBoard";

const Game = () => {
  const [boardSize, setBoardSize] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleBoardSizeConfirm = (size: number) => {
    setBoardSize(size);
    setShowModal(false);
  };

  const handleChangeSize = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col items-center bg-gray-100 py-8">
      {(!boardSize || showModal) && (
        <BoardSizeModal onConfirm={handleBoardSizeConfirm} />
      )}

      {boardSize && !showModal && (
        <div className="flex flex-col items-center gap-4">
          <GameBoard size={boardSize} />
          <button
            onClick={handleChangeSize}
            className="mt-4 px-5 py-2 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg shadow transition"
          >
            Change Box Size
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
