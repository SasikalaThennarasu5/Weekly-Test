// src/components/Task4.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task4 = () => {
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://wrong-url.typicode.com/users')
      .then(() => {})
      .catch(err => setError('Failed to fetch data'));
  }, []);

  return (
    <div>
      <h2>Handle API Error</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Task4;
