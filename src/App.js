import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyWork from "./components/pages/MyWork";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mywork" element={<MyWork />} />
          </Routes>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default App;
