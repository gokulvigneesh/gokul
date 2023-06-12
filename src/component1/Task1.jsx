import React, { useState } from 'react';
import Modal from 'react-modal';
import MyForm from './formik.jsx';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import './Navbar1.css'; // Import the CSS file

const Navbar1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-menu">
          <button
            onClick={handleModalOpen}
            className="navbar-button1"
          >
            Login
          </button>
          <div className="navbar-dropdown">
            <button
              onClick={handleDropdownToggle}
              className="navbar-button"
            >
              About
            </button>
            {isDropdownOpen && (
              <div className="navbar-dropdown-menu">
                <a href="#" className="navbar-dropdown-item">Team</a>
                <a href="#" className="navbar-dropdown-item">Contact</a>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-mobile-menu">
          <button
            onClick={handleMobileMenuToggle}
            className="navbar-icon"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <MyForm />
        <button
          className="modal-close"
          onClick={handleModalClose}
        >
          <AiOutlineClose size={24} />
        </button>
      </Modal>
    </nav>
  );
};

export default Navbar1;
