// src/components/Task7.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Task7 = () => {
  const [updatedName, setUpdatedName] = useState('');
  const [response, setResponse] = useState(null);

  const handleUpdate = async () => {
    const res = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
      name: updatedName
    });
    setResponse(res.data);
  };

  return (
    <div>
      <h2>PUT Request (Update User)</h2>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
        placeholder="New name"
      />
      <button onClick={handleUpdate}>Update</button>
      {response && <p>User updated to: {response.name}</p>}
    </div>
  );
};

export default Task7;
