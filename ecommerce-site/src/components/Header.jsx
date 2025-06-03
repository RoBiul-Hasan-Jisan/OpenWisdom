import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import { useAuth } from "../Contexts/AuthContext"; // import your context here

import "./Header.css";

const Header = () => {
  const { currentUser, logout } = useAuth();  // get real auth state and logout func
  const [isEllipsisMenuOpen, setIsEllipsisMenuOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleEllipsisMenu = () => setIsEllipsisMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  // Use real logout function from context
  const handleLogout = async () => {
    try {
      await logout();
      setIsUserMenuOpen(false);
      navigate("/");
    } catch {
      alert("Failed to log out");
    }
  };

  const openLoginModal = () => setIsLoginOpen(true);
  const openSignupModal = () => setIsSignupOpen(true);
  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  // No need for mock login success here,
  // Instead LoginModal will call login function from context and on success close modal

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link to="/">OpenWisdom</Link>
        </h1>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact2">Book donation</Link>
          <Link to="/contact3">Blog</Link>

          {!currentUser ? (
            <>
              <button className="header-btn" onClick={openLoginModal}>
                Login
              </button>
              <button className="header-btn" onClick={openSignupModal}>
                Sign Up
              </button>
            </>
          ) : (
            <div className="user-menu-container" style={{ position: "relative" }}>
              <button
                className="user-icon-btn"
                onClick={toggleUserMenu}
                aria-label="User menu"
              >
                <span
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  👤
                </span>
              </button>

              {isUserMenuOpen && (
                <div
                  className="user-dropdown-menu"
                  style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "8px",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                    zIndex: 1000,
                    minWidth: "150px",
                  }}
                >
                  <Link
                    to="/dashboard"
                    className="dropdown-item"
                    onClick={() => setIsUserMenuOpen(false)}
                    style={{ display: "block", padding: "8px 12px", color: "#333", textDecoration: "none" }}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/cart"
                    className="dropdown-item"
                    onClick={() => setIsUserMenuOpen(false)}
                    style={{ display: "block", padding: "8px 12px", color: "#333", textDecoration: "none" }}
                  >
                    Cart
                  </Link>
                  <Link
                    to="/profile"
                    className="dropdown-item"
                    onClick={() => setIsUserMenuOpen(false)}
                    style={{ display: "block", padding: "8px 12px", color: "#333", textDecoration: "none" }}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item"
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      color: "red",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        <div className="ellipsis-icon" onClick={toggleEllipsisMenu} title="More">
          &#x22EE;
        </div>

        {isEllipsisMenuOpen && (
          <div className="ellipsis-menu open">
            <Link to="/" onClick={toggleEllipsisMenu}>
              Home
            </Link>
            <Link to="/products" onClick={toggleEllipsisMenu}>
              Products
            </Link>
            <Link to="/cart" onClick={toggleEllipsisMenu}>
              Cart
            </Link>
            <Link to="/about" onClick={toggleEllipsisMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={toggleEllipsisMenu}>
              Contact
            </Link>
            <Link to="/contact2" onClick={toggleEllipsisMenu}>
              Book donation
            </Link>
            <Link to="/contact3" onClick={toggleEllipsisMenu}>
              Blog
            </Link>
            {!currentUser ? (
              <>
                <button
                  className="header-btn"
                  onClick={() => {
                    toggleEllipsisMenu();
                    openLoginModal();
                  }}
                >
                  Login
                </button>
                <button
                  className="header-btn"
                  onClick={() => {
                    toggleEllipsisMenu();
                    openSignupModal();
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                className="header-btn"
                onClick={() => {
                  toggleEllipsisMenu();
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </header>

      {/* Modals */}
      {isLoginOpen && (
        <LoginModal
          onClose={closeModals}
          // Pass down any needed auth functions here if you want
        />
      )}
      {isSignupOpen && (
        <SignupModal
          onClose={closeModals}
          // Pass down any needed auth functions here if you want
        />
      )}
    </>
  );
};

export default Header;
