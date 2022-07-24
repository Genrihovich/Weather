import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import Head from './shared/Header/Header';

function App() {
  return (
    <>
      <Head>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </Head>
    </>
  );
}

export default App;