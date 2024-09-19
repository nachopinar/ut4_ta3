import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default Input;
