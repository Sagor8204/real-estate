"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful!");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <div className="mt-6 space-y-3">
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 p-2 border rounded text-black bg-white hover:bg-gray-100"
        >
          <FaGoogle className="text-red-500" />
          Sign in with Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="w-full flex items-center justify-center gap-2 p-2 border rounded text-white bg-gray-800 hover:bg-gray-700"
        >
          <FaGithub />
          Sign in with GitHub
        </button>

        <button
          onClick={() => signIn("facebook")}
          className="w-full flex items-center justify-center gap-2 p-2 border rounded text-white bg-blue-600 hover:bg-blue-700"
        >
          <FaFacebook />
          Sign in with Facebook
        </button>
      </div>

      <Link
        className="flex items-center justify-center py-2 font-semibold"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
}
