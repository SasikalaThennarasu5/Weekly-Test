// src/components/Task13.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task13 = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Async/Await with Axios</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default Task13;
