import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Добавьте другие маршруты здесь */}
      </Routes>
    </Router>
  );
}

export default App;
