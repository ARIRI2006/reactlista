import React, { useRef } from 'react';

const Formulario = () => {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
      <button onClick={handleClear}>Limpar</button>
    </div>
  );
};

export default Formulario;
