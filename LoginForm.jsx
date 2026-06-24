import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
             <p style={{ color: "red", fontSize: "12px" }}>
                   {errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.password}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;