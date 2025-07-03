// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <h1> HELOO THERE</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
