import React, { useState, useEffect } from 'react';

const CounterAuto = () => {
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [auto]);

  return (
    <div className="box">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setAuto(!auto)}>
        Auto: {auto ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default CounterAuto;
