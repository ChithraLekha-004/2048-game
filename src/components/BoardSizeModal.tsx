import { useState } from "react";

interface BoardSizeModalProps {
  onConfirm: (size: number) => void;
}

const BoardSizeModal = ({ onConfirm }: BoardSizeModalProps) => {
  const [size, setSize] = useState<number>(4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (size >= 2 && size <= 10) {
      onConfirm(size);
    } else {
      alert("Please enter a board size between 2 and 10.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Select Board Size</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            value={size}
            min={2}
            max={10}
            onChange={(e) => setSize(Number(e.target.value))}
            className="border rounded-lg px-3 py-2 text-center w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoardSizeModal;
