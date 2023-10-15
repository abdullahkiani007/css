import React from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/70">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Message Sent</h2>
        <p className="mb-6">We will contact you soon</p>
        <button
          onClick={onClose}
          className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
