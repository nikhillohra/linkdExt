import React, { useState, FC } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose }) => {
  const [response, setResponse] = useState<string>(''); // State for the generated response
  const [input, setInput] = useState<string>(''); // State for the textarea input

  // Function to handle response generation
  const handleGenerate = () => {
    setResponse("Thank you for the opportunity! If you have any more questions, feel free to ask.");
  };

  // Function to handle textarea input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg relative w-96">
        {/* Textarea for input */}
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your command"
          className="w-full border p-2 rounded focus:outline-none"
          rows={3}
        ></textarea>

        {/* Button to generate response */}
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
        >
          {response ? 'Regenerate' : 'Generate'}
        </button>

        {/* Display the generated response */}
        {response && (
          <div className="mt-4">
            <p className="p-2 border rounded bg-gray-100">{response}</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded w-full">
              Insert
            </button>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
