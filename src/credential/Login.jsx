import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      return "All fields are required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/registration/get"
      ); 
      const users = response.data;
      const user = users.find((u) => u.username === username);

      if (user && bcrypt.compareSync(password, user.password)) {
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("isLoggedIn", "true");
        setError("");
        navigate("/");
        window.location.reload();
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Invalid credentials, or Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-xl p-8 my-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#0039a6]">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Username <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">
            Password <span className="text-red-700">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">Sign In</Button>
        <div className="my-2 text-blue-950 underline">
          <Link to={"/registration"}>Don't have an account yet? Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
