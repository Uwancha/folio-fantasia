import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <main className="app-main">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/projects" Component={Projects} />
            <Route Component={NotFound} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
