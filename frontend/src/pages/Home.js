import React, { useState, useEffect } from 'react';
import { healthCheck } from '../services/api';

function Home() {
  const [apiStatus, setApiStatus] = useState('Checking...');

  useEffect(() => {
    checkAPI();
  }, []);

  const checkAPI = async () => {
    try {
      const response = await healthCheck();
      setApiStatus(response.data.message);
    } catch (error) {
      setApiStatus('API connection failed');
    }
  };

  return (
    <div>
      <h1>Welcome to Django + React Boilerplate</h1>
      
      <div className="card">
        <h2>🚀 Quick Start</h2>
        <p><strong>Backend Status:</strong> {apiStatus}</p>
        
        <h3>Getting Started:</h3>
        <ol>
          <li>Set up your backend with Django</li>
          <li>Configure your environment variables</li>
          <li>Run migrations and start the server</li>
          <li>Start building your features!</li>
        </ol>
      </div>

      <div className="card">
        <h2>📚 Features</h2>
        <ul>
          <li>Django REST Framework backend</li>
          <li>React 18 frontend</li>
          <li>React Router for navigation</li>
          <li>Axios for API calls</li>
          <li>CORS configured</li>
          <li>Sample CRUD operations</li>
        </ul>
      </div>

      <div className="card">
        <h2>🔗 Useful Links</h2>
        <ul>
          <li><a href="http://localhost:8000/admin" target="_blank" rel="noopener noreferrer">Django Admin</a></li>
          <li><a href="http://localhost:8000/api" target="_blank" rel="noopener noreferrer">API Root</a></li>
          <li><a href="/items">View Items Demo</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
