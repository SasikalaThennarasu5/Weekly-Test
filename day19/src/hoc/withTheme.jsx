// src/hoc/withTheme.jsx
import React from 'react';

const withTheme = (WrappedComponent) => {
  return function ThemedComponent({ theme = 'light', ...rest }) {
    const themeStyles = {
      light: {
        backgroundColor: '#ffffff',
        color: '#000000',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
      },
      dark: {
        backgroundColor: '#333333',
        color: '#ffffff',
        border: '1px solid #444',
        padding: '20px',
        borderRadius: '10px',
      },
    };

    return (
      <div style={themeStyles[theme]}>
        <WrappedComponent theme={theme} {...rest} />
      </div>
    );
  };
};

export default withTheme;