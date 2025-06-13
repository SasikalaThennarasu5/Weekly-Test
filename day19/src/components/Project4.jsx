
import React from 'react';
import withTheme from '../hoc/withTheme';

const ThemedBox = ({ theme }) => {
  return (
    <div>
      <h3>Current Theme: {theme.toUpperCase()}</h3>
      <p>This Box is wrapped with a {theme} theme!</p>
    </div>
  );
};

export default withTheme(ThemedBox);