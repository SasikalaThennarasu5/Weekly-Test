import React from 'react';

const withStyle = (WrappedComponent, customStyle = {}) => {
  const HOC = (props) => {
    return (
      <div style={customStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return HOC;
};

export default withStyle;