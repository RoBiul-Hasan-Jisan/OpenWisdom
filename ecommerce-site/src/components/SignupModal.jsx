import React, { useState } from "react";
import "./SignUpModal.css";
import { auth } from "../Firebase/firebase"; // ✅ correct path
import { createUserWithEmailAndPassword } from "firebase/auth"; // ✅ Firebase Auth method


const SignupModal = ({ onClose, onSignupSuccess }) => {
  const [name, setName] = useState(""); // Optional, not used by Firebase Auth directly
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        if (onSignupSuccess) onSignupSuccess(); // Optional parent callback
        onClose(); // Close modal
      } catch (error) {
        // Show Firebase errors
        const firebaseErrors = {};
        if (error.code === "auth/email-already-in-use") {
          firebaseErrors.email = "This email is already in use.";
        } else {
          firebaseErrors.general = error.message;
        }
        setErrors(firebaseErrors);
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-modal-title"
      >
        <h2 id="signup-modal-title">Create your OpenWisdom account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <label htmlFor="password-input">Password</label>
          <div className="password-wrapper">
            <input
              id="password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShowPassword(!showPassword);
                }
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {errors.password && <div className="error">{errors.password}</div>}

          <label htmlFor="confirm-password-input">Confirm Password</label>
          <div className="password-wrapper">
            <input
              id="confirm-password-input"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              role="button"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShowConfirmPassword(!showConfirmPassword);
                }
              }}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}

          {errors.general && <div className="error">{errors.general}</div>}

          <div className="modal-buttons">
            <button type="submit">Sign Up</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>

        <div className="social-login">
          <button type="button" className="facebook-btn">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
              alt="Facebook"
              className="social-icon"
            />
            Facebook
          </button>

          <button type="button" className="google-btn">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png"
              alt="Google"
              className="social-icon"
            />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
