import React, { useState, useEffect } from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import Task7 from './Task7';
import Task8 from './Task8';
import Task9 from './Task9';
import Task10 from './Task10';
import Task11 from './Task11';
import Task12 from './Task12';
import Task13 from './Task13';

const Task = () => {
  const [showTask5, setShowTask5] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState('');
  const [showTask8, setShowTask8] = useState(true);
  const [shouldThrowError, setShouldThrowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedData('User Profile Loaded!');
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-4">
      <Task1 />

      <hr />
      <Task2 />

      <hr />
      <Task3 message="This is passed from Task.jsx to Task3 via HOC!" />

      <hr />
      <Task4 />

      <hr />
      <button onClick={() => setShowTask5(!showTask5)} className="btn btn-primary mb-3">
        Toggle Task 5 Visibility
      </button>
      <Task5 isVisible={showTask5} message="Task 5 is conditionally rendered by HOC" />

      <hr />
      <button onClick={() => setIsAuthenticated(!isAuthenticated)} className="btn btn-success mb-3">
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
      <Task6 isAuthenticated={isAuthenticated} username="Suganya" />

      <hr />
      <Task7 isLoading={isLoading} data={loadedData} />

      <hr />
      <button onClick={() => setShowTask8(!showTask8)} className="btn btn-warning mb-3">
        Toggle Task 8 (Mount/Unmount Logger)
      </button>
      {showTask8 && <Task8 />}

      <hr />
      <Task9 />

      <hr />
      <Task10 />

      <hr />
      <button onClick={() => setShouldThrowError(!shouldThrowError)} className="btn btn-danger mb-3">
        {shouldThrowError ? 'Recover Task 11' : 'Trigger Error in Task 11'}
      </button>
      <Task11 shouldThrow={shouldThrowError} />

      <hr />
      <Task12 />

      <hr />
      <Task13 />
    </div>
  );
};

export default Task;