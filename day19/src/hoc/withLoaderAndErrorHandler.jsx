// src/hoc/withLoaderAndErrorHandler.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withLoaderAndErrorHandler = (WrappedComponent, apiUrl) => {
  return function EnhancedComponent(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setData(response.data);
          setError('');
        } catch (err) {
          setError('❌ Failed to fetch data. Please try again.');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [apiUrl]);

    if (loading) {
      return (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading data...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-danger text-center mt-4">
          {error}
        </div>
      );
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoaderAndErrorHandler;