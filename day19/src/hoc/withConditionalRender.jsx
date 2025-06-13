import React from 'react';

const withConditionalRender = (WrappedComponent) => {
  return ({ isVisible, ...props }) => {
    if (!isVisible) {
      return <p style={{ color: 'gray' }}>Component is hidden (via HOC).</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withConditionalRender;