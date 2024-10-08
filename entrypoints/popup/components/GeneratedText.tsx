import React,{FC} from 'react';
interface GeneratedTextProps{
    response : string;
    onInsert : () => void;
}
const GeneratedText:FC<GeneratedTextProps>  = ({ response, onInsert }) => {
  return (
    <div>
      <p>{response}</p>
      <button onClick={onInsert} className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
        Insert into Message
      </button>
    </div>
  );
};

export default GeneratedText;
