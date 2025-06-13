import React, { useEffect } from 'react';

const withTitleUpdate = (WrappedComponent) => {
  const HOC = (props) => {
    useEffect(() => {
      document.title = WrappedComponent.name || 'Component';
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTitleUpdate;