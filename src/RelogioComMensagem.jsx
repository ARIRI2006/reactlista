import React, { useState, useEffect } from 'react';

const RelogioComMensagem = () => {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const timeoutId = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      {showMessage && <p>Oiii</p>}
    </div>
  );
};

export default RelogioComMensagem;
