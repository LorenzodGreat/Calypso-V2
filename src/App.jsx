import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './page/About';
import Home from './page/Home';
import Intro from './page/Intro';
import Service from './page/Service';
import React from 'react';
import Rates from './page/Rate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Services' element={<Service />} />
        <Route path='/About' element={<About />} />
        <Route path='/Rate' element={<Rates />} />
      </Routes>
    </Router>

  );
}

export default App;
