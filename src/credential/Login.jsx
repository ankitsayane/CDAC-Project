import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/registration/login",
        {
          username: username,
          password: password,
        }
      );

      const user = response.data;
      const u = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        username: user.username,
      };
      console.log(user);
      if (user) {
        setError("");
        sessionStorage.setItem("user", JSON.stringify(u));
        sessionStorage.setItem("isLoggedIn", "true");
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
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default Login;
