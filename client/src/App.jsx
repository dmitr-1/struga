import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Page/HomePage/HomePage'));

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
