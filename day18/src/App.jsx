// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';


const App = () => {
  return (
    <div>
      <h1>Axios Tasks</h1>
      <nav>
        {[...Array(13)].map((_, i) => (
          <Link key={i} to={`/task${i + 1}`} style={{ marginRight: 10 }}>
            Task{i + 1}
          </Link>
        ))}
      </nav>

       <h1>Axios Mini Projects</h1>
      <nav>
        <Link to="/project1">User List</Link> | 
        <Link to="/project2">Product CRUD</Link> | 
        <Link to="/project3">Weather App</Link> | 
        <Link to="/project4">Image Gallery</Link>
      </nav>


      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/task8" element={<Task8 />} />
        <Route path="/task9" element={<Task9 />} />
        <Route path="/task10" element={<Task10 />} />
        <Route path="/task11" element={<Task11 />} />
        <Route path="/task12" element={<Task12 />} />
        <Route path="/task13" element={<Task13 />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </div>
  );
};

export default App;
