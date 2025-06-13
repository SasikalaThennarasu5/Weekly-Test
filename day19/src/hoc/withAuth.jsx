import React from 'react';

const withAuth = (WrappedComponent) => {
  return ({ isAuthenticated, ...props }) => {
    if (!isAuthenticated) {
      return <p style={{ color: 'red' }}>Access Denied. Please log in.</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;