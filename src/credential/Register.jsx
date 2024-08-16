import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import bcrypt from "bcryptjs";

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
    } catch (error) {
      console.error("Error loading data", error);
    }
  }

  const validateForm = () => {
    const errors = [];
  
    if (!name || !email || !phone || !username || !password) {
      errors.push("All fields are required.");
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.push("Name should contain only alphabetic characters.");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Invalid email format.");
    }
    if (!/^\d{10}$/.test(phone)) {
      errors.push("Phone number must be 10 digits.");
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      errors.push("Password must be at least 6 characters long and contain both letters and numbers.");
    }
  
    if (errors.length > 0) {
      errors.forEach((error) => toast.warning(error));
      return true; 
    }
  
    return false; 
  };
  
  async function save(event) {
    event.preventDefault();
  
    const validationError = validateForm();
    if (validationError) {
      return;
    }
  
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(password, salt);
  
      await axios.post("http://localhost:8080/registration/", {
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: hashedpassword,
      });
      toast.success("User Registration Successful");
      setName("");
      setEmail("");
      setPhone("");
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      if (error.response.data) {
        setError(error.response.data);
        toast.error(error.response.data);
      }
    }
  }
  
  return (
    <div className="max-w-md mx-auto shadow-xl p-8 my-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#0039a6]">Register</h2>
      <form onSubmit={save} className="space-y-4" method="post">
        <div>
          <label className="block mb-1">
            Name <span className="text-red-700 , text-lg">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">
            Email <span className="text-red-700 , text-lg">*</span>
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">
            Mobile No <span className="text-red-700 , text-lg">*</span>
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">
            Username <span className="text-red-700 , text-lg">*</span>
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
            Password <span className="text-red-700 , text-lg">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        {<p className="text-red-500"></p>}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
