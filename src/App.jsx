import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import Intro from './page/Intro';
import Service from './page/Service';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Services' element={<Service />} />
      </Routes>
    </Router>

  );
}

export default App;
