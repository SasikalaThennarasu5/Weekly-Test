import React from 'react';

const Task1 = () => {
  return (
    <div className="card p-3 mb-4">
      <h3>Task1. Write a brief explanation of what Higher-Order 
Components are and their benefits. </h3>

      <p>What are Higher-Order Components (HOCs) in React, and what are their benefits?</p>

      <p>
        A <strong>Higher-Order Component (HOC)</strong> is a function in React that takes a component as input and
        returns a new enhanced component. It’s a design pattern used to reuse component logic across multiple components.
      </p>

      <pre className="bg-light p-3 rounded">
        <code>
          {`const EnhancedComponent = withHOC(OriginalComponent);`}
        </code>
      </pre>

      <p><strong>Benefits of HOCs:</strong></p>
      <ul>
        <li><strong>Code Reusability</strong> – Share logic like authentication, logging, or styling without duplicating code.</li>
        <li><strong>Separation of Concerns</strong> – Keeps UI components clean by offloading logic.</li>
        <li><strong>Enhanced Composition</strong> – stack multiple HOCs together for advanced behaviors.</li>
        <li><strong>Maintainability</strong> – Makes your app easier to scale and debug.</li>
      </ul>

    </div>
  );
};

export default Task1;