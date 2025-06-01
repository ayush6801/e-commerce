// src/App.jsx
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
