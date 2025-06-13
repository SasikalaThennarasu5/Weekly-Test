// src/hoc/withDataFetch.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withDataFetch = (WrappedComponent, url) => {
  const HOC = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch data');
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return <WrappedComponent {...props} data={data} />;
  };

  return HOC;
};

export default withDataFetch;