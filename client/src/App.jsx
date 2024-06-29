import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import NavBar from './Page/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
