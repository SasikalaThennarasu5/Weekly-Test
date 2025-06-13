import React from 'react';
import withConditionalRender from '../hoc/withConditionalRender';

const Task5 = ({ message }) => {
  return (
    <div>
      <h2>Task 5. Implement an HOC that conditionally renders 
a component based on a boolean prop. </h2>
      <p>{message}</p>
    </div>
  );
};

export default withConditionalRender(Task5);