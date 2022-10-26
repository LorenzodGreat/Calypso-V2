import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import Intro from './page/Intro';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
