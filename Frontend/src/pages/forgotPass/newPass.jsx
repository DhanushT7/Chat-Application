import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "./newPass.css";

function newPass() {
  const navigate = useNavigate();

  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
      console.log("Received email from otp page:", location.state.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/update", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      });

      const data = await res.json();
      if (data.message === "Password updated successfully.") {
        alert("Password successfully updated.");
        navigate("/login"); // Use navigate directly here
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error resetting password:", err);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="pass-box">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="errorMessage">{error}</p>}

          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label>
              I hereby accept the 
              <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="reset-btn" disabled={!isChecked}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default newPass;
