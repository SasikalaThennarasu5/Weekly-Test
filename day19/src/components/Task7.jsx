import React from 'react';
import withLoading from '../hoc/withLoading';

const Task7 = ({ data }) => {
  return (
    <div>
      <h2>Task 7.  Show a loading spinner until the data is loaded. </h2>
      <p>Data Loaded: {data}</p>
    </div>
  );
};

export default withLoading(Task7);