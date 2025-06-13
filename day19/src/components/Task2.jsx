import React from 'react';
import withLogger from '../hoc/withLogger';

const Task2 = () => {
  return (
    <div>
      <h2>Task 2. Create a simple HOC that logs "Component 
Rendered" whenever a wrapped component renders. </h2>
      <p>This component is wrapped with a logger HOC.</p>
    </div>
  );
};

export default withLogger(Task2);