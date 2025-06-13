import React, { useEffect } from 'react';

const withLifecycleLogger = (WrappedComponent, name = 'Component') => {
  const HOC = (props) => {
    useEffect(() => {
      console.log(`${name} Mounted`);

      return () => {
        console.log(`${name} Unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withLifecycleLogger;