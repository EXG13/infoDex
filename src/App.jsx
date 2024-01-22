import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBord";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <NewsBoard />

      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
