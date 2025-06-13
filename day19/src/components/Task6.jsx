import React from 'react';
import withAuth from '../hoc/withAuth';
const Task6 = ({ username }) => {
  return (
    <div>
      <h2>Task 6. Create an HOC that renders a component only if the 
isAuthenticated prop is true. </h2>
      <p>Welcome, {username}! You are authenticated.</p>
    </div>
  );
};

export default withAuth(Task6);