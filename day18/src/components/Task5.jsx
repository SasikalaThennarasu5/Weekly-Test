// src/components/Task5.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task5 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Loading State</h2>
      {loading ? <p>Loading...</p> : (
        <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
      )}
    </div>
  );
};

export default Task5;
