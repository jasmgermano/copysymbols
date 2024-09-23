import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App.js';
import Category from './category.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/dataContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);

