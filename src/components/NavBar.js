import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleFocusOut = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget)) {
      setMenuOpen(false);
    }
  };

  function CustomTag({ to, children, ...props }) {
    return (
      <li className="burgerlinkCenter">
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`} ref={dropdownRef}>
      <Link to="/" className="name">
        Anthony Hoffman
      </Link>

      {/* Hamburger Menu Icon */}
      <div
        className={`hamburger-menu ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
        tabIndex={0}
        onFocusOut={handleFocusOut}
      >
        <div className={`bar1 ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar2 ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar3 ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <CustomTag to="/about">About Me</CustomTag>
        <CustomTag to="/mywork">Portfolio</CustomTag>
        <CustomTag to="/contact">Contact</CustomTag>
      </ul>
    </nav>
  );
};

export default NavBar;
