import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isEllipsisMenuOpen, setIsEllipsisMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // New states for modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const navigate = useNavigate();

  const toggleEllipsisMenu = () => setIsEllipsisMenuOpen(prev => !prev);

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("Logged out successfully.");
    navigate("/");
  };

  // Open modals
  const openLoginModal = () => setIsLoginOpen(true);
  const openSignupModal = () => setIsSignupOpen(true);

  // Close modals
  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

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

          {isAuthenticated ? (
            <button className="header-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button className="header-btn" onClick={openLoginModal}>Login</button>
              <button className="header-btn" onClick={openSignupModal}>Sign Up</button>
            </>
          )}
        </nav>

        <div className="ellipsis-icon" onClick={toggleEllipsisMenu} title="More">
          &#x22EE;
        </div>

        {isEllipsisMenuOpen && (
          <div className="ellipsis-menu open">
            <Link to="/" onClick={toggleEllipsisMenu}>Home</Link>
            <Link to="/products" onClick={toggleEllipsisMenu}>Products</Link>
            <Link to="/cart" onClick={toggleEllipsisMenu}>Cart</Link>
            <Link to="/about" onClick={toggleEllipsisMenu}>About Us</Link>
            <Link to="/contact" onClick={toggleEllipsisMenu}>Contact</Link>
            <Link to="/contact2" onClick={toggleEllipsisMenu}>Book donation</Link>
            <Link to="/contact3" onClick={toggleEllipsisMenu}>Blog</Link>
            {!isAuthenticated ? (
              <>
                <button className="header-btn" onClick={() => { toggleEllipsisMenu(); openLoginModal(); }}>Login</button>
                <button className="header-btn" onClick={() => { toggleEllipsisMenu(); openSignupModal(); }}>Sign Up</button>
              </>
            ) : (
              <button className="header-btn" onClick={handleLogout}>Logout</button>
            )}
          </div>
        )}
      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Login to OpenWisdom</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
              <div className="modal-buttons">
                <button type="submit">Login</button>
                <button type="button" onClick={closeModals}>Cancel</button>
              </div>
            </form>

            <div className="social-login">
              <button className="facebook-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.49v-9.294H9.691v-3.622h3.125V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.917c-1.505 0-1.797.716-1.797 1.767v2.318h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/></svg>
                Continue with Facebook
              </button>
              <button className="google-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.805 10.023H21v-.023H12v4h5.004c-.204 1.144-1.373 3.36-5.004 3.36-3.017 0-5.48-2.496-5.48-5.568 0-3.07 2.463-5.565 5.48-5.565 1.71 0 2.86.73 3.527 1.362l2.41-2.318C17.095 6.1 15.274 5.09 12 5.09c-6.085 0-11 4.95-11 11 0 6.056 4.915 11 11 11 6.34 0 10.56-4.438 10.56-10.69 0-.722-.08-1.3-.755-1.377z"/></svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignupOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Create your OpenWisdom account</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
              <div className="modal-buttons">
                <button type="submit">Sign Up</button>
                <button type="button" onClick={closeModals}>Cancel</button>
              </div>
            </form>

            <div className="social-login">
              <button className="facebook-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.49v-9.294H9.691v-3.622h3.125V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.917c-1.505 0-1.797.716-1.797 1.767v2.318h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/></svg>
                Continue with Facebook
              </button>
              <button className="google-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.805 10.023H21v-.023H12v4h5.004c-.204 1.144-1.373 3.36-5.004 3.36-3.017 0-5.48-2.496-5.48-5.568 0-3.07 2.463-5.565 5.48-5.565 1.71 0 2.86.73 3.527 1.362l2.41-2.318C17.095 6.1 15.274 5.09 12 5.09c-6.085 0-11 4.95-11 11 0 6.056 4.915 11 11 11 6.34 0 10.56-4.438 10.56-10.69 0-.722-.08-1.3-.755-1.377z"/></svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
