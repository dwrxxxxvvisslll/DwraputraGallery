// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './pages/DetailPage';
import PortfolioPage from './pages/PortfolioPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery/:id" element={<DetailPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  </BrowserRouter>
);
