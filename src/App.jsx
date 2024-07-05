//  App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dendrology from './pages/Dendrology';
import DendrologyAll from './pages/DendrologyAll';
import Flora from './pages/Flora';
import FloraAll from './pages/FloraAll';
import Floriculture from './pages/Floriculture';
import FloricultureAll from './pages/FloricultureAll';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Map from './pages/MapPage';
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
            <Route path="/flora" element={<Flora />} />
            <Route path="/floriculture" element={<Floriculture />} />
            <Route path="/dendrology-all" element={<DendrologyAll />} />
            <Route path="/flora-all" element={<FloraAll />} />
            <Route path="/floriculture-all" element={<FloricultureAll />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
