import React from 'react';
import withAuthProtection from '../hoc/withAuthProtection';

const Project1 = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary mb-3">Welcome to the Protected Page</h2>
          <p className="card-text text-muted">
            You are authenticated and allowed to see this content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withAuthProtection(Project1);