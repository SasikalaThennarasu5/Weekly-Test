// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Project3 from './components/Project3';  // Make sure your Project3 has a working API key
import Project4 from './components/Project4';

const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Axios Mini Projects</h1>
      
      <nav className="text-center mb-4">
        <Link to="/project3" className="btn btn-outline-primary mx-2">Weather App</Link>
        <Link to="/project4" className="btn btn-outline-success mx-2">Image Gallery</Link>
      </nav>

      <Routes>
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </div>
  );
};

export default App;
