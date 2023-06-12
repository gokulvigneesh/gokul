import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNestedDropdownToggle = () => {
    setShowNestedDropdown(!showNestedDropdown);
  };

  return (
    <nav className="navbar1">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          My Website
        </Link>
        <div className="navbar__menu">
          <div className="navbar__menu-item" onClick={handleDropdownToggle}>
            Tasks
            <i className={`fas fa-chevron-down arrow ${showDropdown ? 'arrow-up' : ''}`} />
          </div>
          {showDropdown && (
            <div className="navbar__dropdown">
              <Link to="/component1/Task1" className="navbar__dropdown-item">
                Task 1
              </Link>
              <Link to="/component2/form" className="navbar__dropdown-item">
                Task 2
              </Link>
              <div className="navbar__dropdown-item" onClick={handleNestedDropdownToggle}>
                Task 3
                <i className={`fas fa-chevron-down arrow ${showNestedDropdown ? 'arrow-up' : ''}`} />
              </div>
              {showNestedDropdown && (
                <div className="navbar__nested-dropdown">
                  <Link to="/component3/autocomplete" className="navbar__nested-dropdown-item">
                   Autocomplete
                  </Link>
                  <Link to="/component3/gallery" className="navbar__nested-dropdown-item">
                    Gallery
                  </Link>
                  <Link to="/component3/timer" className="navbar__nested-dropdown-item">
                   Timer
                  </Link>
                  <Link to="/component3/zoom" className="navbar__nested-dropdown-item">
                  ImageZoom
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
