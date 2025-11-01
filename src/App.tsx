import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Yuhakway CRM</h1>
          <p>Native Mobile App with Capacitor</p>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <div className="welcome">
                <h2>Welcome to Yuhakway CRM</h2>
                <p>Your native mobile app is ready!</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
