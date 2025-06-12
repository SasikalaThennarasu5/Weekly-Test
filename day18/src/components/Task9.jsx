// src/components/Task9.jsx
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance'; // custom configured instance

const Task9 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Global Axios Config</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default Task9;
