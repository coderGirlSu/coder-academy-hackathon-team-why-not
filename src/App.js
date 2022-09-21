import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmojiSearch from "./components/EmojiSeach";
import HireUs from "./components/HireUs";
import NotFound from "./components/NotFound";
import { useState } from 'react';
import ReactSwitch from 'react-switch'


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
      <div className="App" id={theme}>
        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<EmojiSearch />} />
              <Route path="/hireUs" element={<HireUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
      </div>
  );
}

export default App;
