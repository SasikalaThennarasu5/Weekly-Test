import React, { useState } from 'react';

const withClickTracker = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      setClickCount(prev => prev + 1);
    };

    return (
      <WrappedComponent
        clickCount={clickCount}
        handleClick={handleClick}
        {...props}
      />
    );
  };
};

export default withClickTracker;