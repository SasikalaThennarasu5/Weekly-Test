import React from 'react';

const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className="text-center p-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading, please wait...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;