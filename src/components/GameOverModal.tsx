import React from "react";

interface GameOverModalProps {
  score: number;
  onPlayAgain: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ score, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Over 😢</h2>
        <p className="text-gray-600 mb-4 text-lg">
          Your Score: <span className="font-semibold text-gray-900">{score}</span>
        </p>
        <button
          onClick={onPlayAgain}
          className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
