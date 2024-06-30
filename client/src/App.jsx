import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
