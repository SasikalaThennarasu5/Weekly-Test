// src/components/Task10.jsx
import React, { useEffect } from 'react';
import axios from '../utils/axiosInstance';

const Task10 = () => {
  useEffect(() => {
    const reqInterceptor = axios.interceptors.request.use(config => {
      console.log('Request Intercepted:', config);
      return config;
    });

    const resInterceptor = axios.interceptors.response.use(response => {
      console.log('Response Intercepted:', response);
      return response;
    });

    axios.get('/posts/1');

    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return (
    <div>
      <h2>Axios Interceptors</h2>
      <p>Open the console to see intercepted request and response logs.</p>
    </div>
  );
};

export default Task10;
