// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<ProfileDetails />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
