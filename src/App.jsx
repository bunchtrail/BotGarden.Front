//  App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dendrology from './pages/Dendrology';
import DendrologyAll from './pages/DendrologyAll';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />;

function App() {
  return (
    <div className="page-container">
      <Router>
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dendrology" element={<Dendrology />} />
            <Route path="/dendrology-all" element={<DendrologyAll />} />

            {/* Добавьте другие маршруты здесь */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
