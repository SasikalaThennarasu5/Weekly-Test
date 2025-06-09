import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterAuto from './components/CounterAuto';
import TodoLocalStorage from './components/TodoLocalStorage';
import PasswordToggle from './components/PasswordToggle';
import ApiFetcher from './components/ApiFetcher';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Link to="/">Counter</Link>
        <Link to="/todo">To-Do List</Link>
        <Link to="/password">Password Toggle</Link>
        <Link to="/api">API Fetcher</Link>
        <Link to="/scroll">Scroll to Top</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CounterAuto />} />
        <Route path="/todo" element={<TodoLocalStorage />} />
        <Route path="/password" element={<PasswordToggle />} />
        <Route path="/api" element={<ApiFetcher />} />
        <Route path="/scroll" element={<ScrollToTopWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper for ScrollToTop demo (adds scrollable content)
const ScrollToTopWrapper = () => (
  <div className="box" style={{ height: '1500px', padding: '20px' }}>
    <h2>Scroll Down to See the Button</h2>
    <p>Content goes here...</p>
    <ScrollToTop />
  </div>
);

export default App;
