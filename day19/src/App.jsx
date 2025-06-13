import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import './App.css'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2 className='text-center'> Day_19_Tasks</h2>} />

          <Route path="/task" element={<Task />} />

          <Route
            path="/project1"
            element={
              <>
                <h3>Mini Project 1: Authentication Protected Page</h3>
                <button
                  className="btn btn-outline-primary mb-3"
                  onClick={() => setIsAuthenticated(!isAuthenticated)}
                >
                  {isAuthenticated ? 'Logout' : 'Login'}
                </button>
                <Project1 isAuthenticated={isAuthenticated} />
              </>
            }
          />

          <Route
            path="/project2"
            element={
              <>
                <h3>Mini Project 2: Loading and Error Handler</h3>
                <Project2 />
              </>
            }
          />

          <Route
            path="/project3"
            element={
              <>
                <h3>Mini Project 3: Click Tracker</h3>
                <Project3 />
              </>
            }
          />

          <Route
            path="/project4"
            element={
              <>
                <h3>Mini Project 4: Themed Components</h3>
                <button className="btn btn-secondary mb-3" onClick={toggleTheme}>
                  Toggle Theme
                </button>
                <Project4 theme={theme} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;