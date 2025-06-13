import React, { useState } from 'react';

const withMouseTracker = (WrappedComponent) => {
  const HOC = (props) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    return (
      <div onMouseMove={handleMouseMove} style={{ border: '2px dashed #333', padding: '20px' }}>
        <WrappedComponent {...props} x={coords.x} y={coords.y} />
      </div>
    );
  };

  return HOC;
};

export default withMouseTracker;