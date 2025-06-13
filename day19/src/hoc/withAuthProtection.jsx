import React from 'react';

const withAuthProtection = (WrappedComponent) => {
  return function ProtectedComponent({ isAuthenticated, ...rest }) {
    if (!isAuthenticated) {
      return (
        <div className="alert alert-danger p-4 text-center">
          <h4>🚫 Access Denied</h4>
          <p>You must be logged in to view this page.</p>
        </div>
      );
    }

    return <WrappedComponent {...rest} />;
  };
};

export default withAuthProtection;