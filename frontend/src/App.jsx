import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import Home from './pages/home';
import History from './pages/history';
import VideoMeet from './pages/VideoMeet';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
