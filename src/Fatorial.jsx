import React, { useState, useMemo } from 'react';

const fatorial = (n) => {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
};

const Fatorial = () => {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState(0);

  const result = useMemo(() => fatorial(number), [number]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    setNumber(parseInt(input));
  };

  return (
    <div>
      <input type="number" value={input} onChange={handleChange} />
      <button onClick={handleCalculate}>Calcular Fatorial</button>
      <h2>Fatorial de {number} é: {result}</h2>
    </div>
  );
};

export default Fatorial;
