import React, { useState, FC } from 'react';
import Modal from './ModalText';

const IconButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="fixed bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full">
        🤖 AI
      </button>

      {/* Conditionally render the Modal if it's open */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default IconButton;
