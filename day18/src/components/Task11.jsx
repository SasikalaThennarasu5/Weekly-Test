// src/components/Task11.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Task11 = () => {
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const fetchData = () => {
    controllerRef.current = new AbortController();

    axios.get('https://jsonplaceholder.typicode.com/users', {
      signal: controllerRef.current.signal,
    })
      .then(res => setData(res.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        }
      });
  };

  const cancelRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  return (
    <div>
      <h2>Cancel API Request</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={cancelRequest}>Cancel Request</button>
      <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default Task11;
