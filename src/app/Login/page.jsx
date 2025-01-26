"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
      const router = useRouter();
    
  const [formData, setFormData] = useState({
    cnic: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Reset error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { cnic, password } = formData;

    // Validate CNIC (should be exactly 13 digits)
    const cnicRegex = /^[0-9]{13}$/;
    if (!cnicRegex.test(cnic)) {
      setErrorMessage("CNIC must be exactly 13 digits.");
      return;
    }

    // Validate password (simple validation: at least 6 characters)
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // If everything is valid, submit form (for demo, we'll just log the data)
    console.log("Login Data:", formData);
    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CNIC Input */}
          <div>
            <label htmlFor="cnic" className="block text-gray-700 font-medium mb-2">
              CNIC (13 digits)
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter CNIC"
              required
              maxLength="13"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
