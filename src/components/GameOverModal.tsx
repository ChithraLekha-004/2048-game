import React from "react";

interface GameOverModalProps {
  score: number;
  onPlayAgain: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ score, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 pointer-events-none">
      <div className="bg-white rounded-t-2xl shadow-xl p-6 text-center w-full sm:w-96 mb-0 pointer-events-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Game Over 😢</h2>
        <p className="text-gray-600 mb-4 text-lg">
          Your Score: <span className="font-semibold text-gray-900">{score}</span>
        </p>
        <button
          onClick={onPlayAgain}
          className="mt-1 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
