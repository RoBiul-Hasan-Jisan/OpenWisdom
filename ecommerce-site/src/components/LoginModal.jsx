import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";// adjust path if needed
import './LoginModal.css';


const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMsg("");
      onLoginSuccess(); // Login successful
      onClose();        // Close modal
    } catch (error) {
      setErrorMsg("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <h2 id="login-modal-title">Login to OpenWisdom</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          <div className="modal-buttons">
            <button type="submit">Login</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>

        <div className="social-login">
          <button type="button" className="facebook-btn" disabled>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
              alt="Facebook"
              className="social-icon"
            />
            Facebook (coming soon)
          </button>

          <button type="button" className="google-btn" disabled>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png"
              alt="Google"
              className="social-icon"
            />
            Google (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;