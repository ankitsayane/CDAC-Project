import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://localhost:8080/registration/get");
      console.log(result.data);
    } catch (error) {
      console.error("Error loading data", error);
    }
  }

  async function save(event) {
    event.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      username === "" ||
      password === ""
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:8080/registration/", {
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: password,
      });
      toast("User Registration Successful");
      setName("");
      setEmail("");
      setPhone("");
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      toast("User Registration Failed");
    }
  }

  return (
    <div className="max-w-md mx-auto shadow-xl p-8 my-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#0039a6]">Register</h2>
      <form onSubmit={save} className="space-y-4" method="post">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Mobile No</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
