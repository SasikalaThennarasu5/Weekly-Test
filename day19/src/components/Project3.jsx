import React from 'react';
import withClickTracker from '../hoc/withClickTracker';

const ClickTracker = ({ clickCount, handleClick }) => {
  return (
    <div className="card p-4 w-50">
      <h3>Click Tracker</h3>
      <p>You have clicked the button <strong>{clickCount}</strong> times.</p>
      <button className="btn btn-success w-25" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default withClickTracker(ClickTracker);