"use client";

import { useState } from "react";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";


export default function Form() {
  const router = useRouter();


  const Swal = require('sweetalert2')
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all inputs are filled
    const isValid = Object.values(formData).every((value) => value !== "");

    if (isValid) {
      Swal.fire({
  title: 'Success!',
  text: 'Your Information Send to Saylani',
  icon: 'success',
  confirmButtonText: 'Cool'
})
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Saylani Information Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input 1 */}
          <div>
            <label
              htmlFor="input1"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Option 1
            </label>
            <select
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="Valima">Valima</option>
              <option value="Furniture">Furniture</option>
              <option value="Valima Food">Valima Food</option>
              <option value="Jahez">Jahez</option>
            </select>
          </div>

          {/* Input 2 */}
          <div>
            <label
              htmlFor="input2"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Option 2
            </label>
            <select
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="2 Lakh">2 Lakh</option>
              <option value="3 Lakh">3 Lakh</option>
              <option value="4 Lakh">4 Lakh</option>
              <option value="5 Lakh">5 Lakh</option>
            </select>
          </div>

          {/* Input 3 */}
          <div>
            <label
              htmlFor="input3"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Option 3
            </label>
            <select
              id="input3"
              name="input3"
              value={formData.input3}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="Option 1 year">Option 1 year</option>
              <option value="Option 2 years">Option 2 years</option>
              <option value="Option 3 years">Option 3 years</option>
            </select>
          </div>

          {/* Input 4 */}
          <div>
            <label
              htmlFor="input4"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Option 4
            </label>
            <select
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="Option 25000">25000</option>
              <option value="Option 50000">50000</option>
              <option value="Option 70000">70000</option>
              <option value="Option 80000">80000</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
          onClick={() => router.push("/Login")}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
