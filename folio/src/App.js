// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar'; 
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path= "/about" element = {<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
