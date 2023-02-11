import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyWork from "./components/pages/MyWork";
import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mywork" element={<MyWork />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
