import React, { useState } from 'react';

import Modal from './components/ModalText';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
   
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default App;
