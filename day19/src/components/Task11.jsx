
import React from 'react';
import withErrorBoundary from '../hoc/withErrorBoundary';

const Task11 = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Intentional error for testing the error boundary!');
  }

  return (
    <div>
      <h2>Task 11.  Catch and display errors from wrapped components. </h2>
      <p>This component renders correctly unless `shouldThrow` is true.</p>
    </div>
  );
};

export default withErrorBoundary(Task11);