import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  const HOC = (props) => {
    useEffect(() => {
      console.log('Component Rendered');
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withLogger;