// src/components/Task6.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Task6 = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', { name });
    setResponse(res.data);
  };

  return (
    <div>
      <h2>POST Request</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" required />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Created User ID: {response.id}</p>}
    </div>
  );
};

export default Task6;
