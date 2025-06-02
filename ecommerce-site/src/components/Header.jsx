import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isEllipsisMenuOpen, setIsEllipsisMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Password visibility for Sign In modal
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleEllipsisMenu = () => setIsEllipsisMenuOpen((prev) => !prev);
  const toggleLoginModal = () => setIsLoginOpen((prev) => !prev);
  const toggleSignInModal = () => setIsSignInOpen((prev) => !prev);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Close modal when clicking overlay background
  const closeLoginOnOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) toggleLoginModal();
  };

  const closeSignInOnOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) toggleSignInModal();
  };

  return (
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
        <button className="header-btn" onClick={toggleLoginModal}>
          Login
        </button>
        <button className="header-btn" onClick={toggleSignInModal}>
          Sign In
        </button>
      </nav>

      <div className="ellipsis-icon" onClick={toggleEllipsisMenu} title="More">
        &#x22EE;
      </div>

      {isEllipsisMenuOpen && (
        <div className="ellipsis-menu">
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
          <button className="header-btn" onClick={toggleLoginModal}>
            Login
          </button>
          <button className="header-btn" onClick={toggleSignInModal}>
            Sign In
          </button>
        </div>
      )}
{/* Login Modal */}
{isLoginOpen && (
  <div className="modal-overlay" onClick={closeLoginOnOverlayClick}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Login</h2>

      {/* Social login buttons */}
      <div className="social-buttons">
        <button
          type="button"
          className="header-btn google-btn"
          onClick={() => alert("Login with Google clicked")}
        >
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
          >
            {/* SVG paths here */}
          </svg>
          Google
        </button>

        <button
          type="button"
          className="header-btn facebook-btn"
          onClick={() => alert("Login with Facebook clicked")}
        >
          {/* Facebook Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            {/* SVG paths here */}
          </svg>
          Facebook
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Login submitted!");
        }}
      >
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="primary-btn">Login</button>
        <button
          type="button"
          className="cancel-btn"
          onClick={toggleLoginModal}
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}

{/* Sign In Modal */}
{isSignInOpen && (
  <div className="modal-overlay" onClick={closeSignInOnOverlayClick}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Sign In</h2>

      {/* Social sign-in buttons */}
      <div className="social-buttons">
        <button
          type="button"
          className="header-btn google-btn"
          onClick={() => alert("Sign In with Google clicked")}
        >
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
          >
            {/* SVG paths here */}
          </svg>
          Google
        </button>

        <button
          type="button"
          className="header-btn facebook-btn"
          onClick={() => alert("Sign In with Facebook clicked")}
        >
          {/* Facebook Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            {/* SVG paths here */}
          </svg>
          Facebook
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Sign In submitted!");
        }}
        className="signin-form"
      >
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="password-input"
          />
          <span
            onClick={toggleShowPassword}
            className="password-toggle"
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "👁️‍🗨️" : "👁️"}
          </span>
        </div>

        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            className="password-input"
          />
          <span
            onClick={toggleShowConfirmPassword}
            className="password-toggle"
            title={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? "👁️‍🗨️" : "👁️"}
          </span>
        </div>

        <button type="submit" className="primary-btn">Sign In</button>
        <button
          type="button"
          className="cancel-btn"
          onClick={toggleSignInModal}
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}

      
    </header>
  );
};

export default Header;
