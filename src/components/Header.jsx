import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaSearch } from "react-icons/fa";
import logo from "../../src/assets/ma.jpg"; // Update with the actual path to your logo
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src={logo}
          alt="Marketing Association New Zealand"
          className="logo"
        />
      </div>
      <div className="nav-buttons">
        <div className="search-container">
          <FaSearch className="search-icon" onClick={toggleSearch} />
          {searchOpen && (
            <div className="search-bar">
              <SearchBar />
            </div>
          )}
        </div>
        <button className="nav-button lato-bold">YOUR DASHBOARD</button>
        <button className="nav-button lato-bold">BECOME A MA MEMBER</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-close" onClick={toggleMenu}>
          &times; {/* This is the close icon (X) */}
        </div>
        <ul className="large-font">
          <li>Membership</li>
          <li>Events</li>
          <li>Training</li>
          <li>Community</li>
          <li>Services</li>
          <li>Resource Hub</li>
        </ul>
        <ul className="small-font">
          <li>Partnership</li>
          <li>Latest News</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
