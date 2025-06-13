import React from 'react';
import withLogger from '../hoc/withLogger';

const Task3 = ({ message }) => {
  return (
    <div>
      <h2>Task 3. Pass props from HOC to the wrapped 
component and display them. </h2>
      <p>Message from props: {message}</p>
    </div>
  );
};

export default withLogger(Task3);