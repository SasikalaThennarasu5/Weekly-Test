import React from 'react';
import withMouseTracker from '../hoc/withMouseTracker';

const Task10 = ({ x, y }) => {
  return (
    <div>
      <h2>Task 10. Track mouse hover events and display the 
coordinates. </h2>
      <p>Move your mouse inside this area.</p>
      <p><strong>X:</strong> {x}, <strong>Y:</strong> {y}</p>
    </div>
  );
};

export default withMouseTracker(Task10);