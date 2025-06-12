// src/components/Task12.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

const Task12 = () => {
  useEffect(() => {
    const retryAxios = axios.create();

    retryAxios.interceptors.response.use(null, async error => {
      const config = error.config;
      if (!config._retry) {
        config._retry = true;
        console.log('Retrying request...');
        return retryAxios(config);
      }
      return Promise.reject(error);
    });

    retryAxios.get('https://jsonplaceholder.typicode.com/invalid-url')
      .then(res => console.log(res.data))
      .catch(err => console.log('Failed after retry'));

  }, []);

  return (
    <div>
      <h2>Retry Failed Requests</h2>
      <p>Check the console for retry attempts.</p>
    </div>
  );
};

export default Task12;
