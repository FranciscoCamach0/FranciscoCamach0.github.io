// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {}
        <h1>HELOO THERE</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
