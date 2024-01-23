import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact"
import NewsBoard from "./components/NewsBoard";
import SearchBar from "./components/Searchbar";

function App() {
  return (
    <Router>
      <Navbar />
      <NewsBoard/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
