import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1>Django + React Boilerplate</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/items">Items</Link></li>
            </ul>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Django React Boilerplate</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
