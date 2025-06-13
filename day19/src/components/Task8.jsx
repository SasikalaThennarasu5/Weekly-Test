import React from 'react';
import withLifecycleLogger from '../hoc/withLifecycleLogger';

const Task8 = () => {
  return (
    <div>
      <h2>Task 8.  Log component lifecycle events (mounted/unmounted) using 
the HOC. </h2>
      <p>This component logs when it is mounted and unmounted.</p>
    </div>
  );
};

export default withLifecycleLogger(Task8, 'Task8');