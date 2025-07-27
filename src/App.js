import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Questionnaire from './pages/Questionnaire';
import Statistics from './pages/Statistics';
import Resources from './pages/Resources';
import Chat from './pages/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" style={{ width: '180px', height: 'auto' }} />
      <header className="App-header">
        <Router>
          <div className="app-container">
            <div className="tab-bar">
              <Link to="/" className="tab">Risk Checker</Link>
              <Link to="/statistics" className="tab">Statistics</Link>
              <Link to="/resources" className="tab">Resources</Link>
              <Link to="/chat" className="tab">Chat</Link>
            </div>
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Questionnaire />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
