import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './page/About';
import Home from './page/Home';
import Intro from './page/Intro';
import Service from './page/Service';
import React from 'react';
import Rates from './page/Rate';
import Errors from './error/404';
import Contact from './page/Contact';
import Feeds from './page/Feeds';
import INAFC from './page/serviceList/INAFC';
import CO from './page/serviceList/CO';
import Inspection from './page/serviceList/Inspection';
import CDOP from './page/serviceList/CDOP';
import PFC from './page/serviceList/PFC';
import Private from './page/Privacy';
import Terms from './page/Terms';
import Fix from './error/Fix';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:PageName' element={<Errors />} />
        <Route path='*' element={<Errors />} />
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Fix />} />
        <Route path='/rate' element={<Fix />} />
        <Route path='/feeds' element={<Fix />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Private />} />
        <Route path='/services' element={<Service />} />
        <Route path='/services/items' element={<INAFC />} />
        <Route path='/services/customers' element={<CO />} />
        <Route path='/services/inspection' element={<Inspection />} />
        <Route path='/services/collection' element={<CDOP />} />
        <Route path='/services/procedure' element={<PFC />} />
      </Routes>
    </Router>

  );
}

export default App;
