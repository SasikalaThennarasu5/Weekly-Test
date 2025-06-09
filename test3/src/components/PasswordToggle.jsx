import React, { useState, useRef, useEffect } from 'react';

const PasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="box">
      <h2>Password Input</h2>
      <input
        type={visible ? 'text' : 'password'}
        ref={inputRef}
        placeholder="Enter password"
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordToggle;
