// src/components/Task8.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Task8 = () => {
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    await axios.delete('https://jsonplaceholder.typicode.com/users/1');
    setMessage('User deleted successfully!');
  };

  return (
    <div>
      <h2>DELETE Request</h2>
      <button onClick={handleDelete}>Delete User</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Task8;
