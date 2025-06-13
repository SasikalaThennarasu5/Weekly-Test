
import React from 'react';
import withLogger from '../hoc/withLogger';
import withTitleUpdate from '../hoc/withTitleUpdate';

const Task13 = () => {
  return (
    <div>
      <h2>Task 13. Combine two or more HOCs into one component. </h2>
      <p>This component uses multiple HOCs (Logger + Title Update).</p>
    </div>
  );
};

export default withLogger(withTitleUpdate(Task13));