import React from 'react';
import withStyle from '../hoc/withStyle';

const Task4 = () => {
  return (
    <div>
      <h2>Task 4. Create an HOC that adds custom CSS styles to the 
wrapped component. </h2>
      <p>This component is styled using an HOC.</p>
    </div>
  );
};

const customStyles = {
  backgroundColor: '#f0f8ff',
  padding: '20px',
  borderRadius: '10px',
  color: '#333',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};

export default withStyle(Task4, customStyles);