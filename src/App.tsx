import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}
  
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }
  
  const className = "app" + theme;
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Router>
            <div className={className}>
              <Nav />
              <main className="app-main">
                <Routes>
                  <Route path="/" Component={Home} />
                  <Route path="/about" Component={About} />
                  <Route path="/projects" Component={Projects} />
                </Routes>
              </main>
              <Footer />
            </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
