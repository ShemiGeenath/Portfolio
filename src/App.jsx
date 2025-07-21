// App.js (Main Entry)
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// import ProjectDetails from './pages/ProjectDetails';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;