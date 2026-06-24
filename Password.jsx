import React, { useState } from "react";

function PasswordValidation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasLength = password.length >= 8;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  const passwordMatch =
    password !== "" && password === confirmPassword;

  const handleReset = () => {
    if (
      hasLength &&
      hasLower &&
      hasUpper &&
      hasNumber &&
      hasSpecial &&
      passwordMatch
    ) {
      alert("Password Reset Successfully");

      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Please enter a valid password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2e8f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h3>New Password</h3>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />

        <h3>Re-enter Password</h3>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          <p><b>Your password must contain:</b></p>

          <p style={{ color: hasLength ? "green" : "red" }}>
            {hasLength ? "✓" : "•"} At least 8 characters
          </p>

          <p style={{ color: hasLower ? "green" : "red" }}>
            {hasLower ? "✓" : "•"} Lowercase letter (a-z)
          </p>

          <p style={{ color: hasUpper ? "green" : "red" }}>
            {hasUpper ? "✓" : "•"} Uppercase letter (A-Z)
          </p>

          <p style={{ color: hasNumber ? "green" : "red" }}>
            {hasNumber ? "✓" : "•"} Number (0-9)
          </p>

          <p style={{ color: hasSpecial ? "green" : "red" }}>
            {hasSpecial ? "✓" : "•"} Special character (!@#$%^&*)
          </p>

          <p style={{ color: passwordMatch ? "green" : "red" }}>
            {passwordMatch ? "✓" : "•"} Passwords Match
          </p>
        </div>

        <button
          onClick={handleReset}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#7c4dff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default PasswordValidation;