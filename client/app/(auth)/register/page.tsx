"use client"

import Link from 'next/link';
import React, { useState } from 'react';

interface RegisterProps {
  toggleForm: () => void;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  schoolName: string;
}

const Register: React.FC<RegisterProps> = ({ toggleForm }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    schoolName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace this with your form submission logic
  };

  return (
    <div className='flex justify-center items-center bg-[#e9edc9] px-6 lg:px-16 py-4 rounded-3xl mb-10 '>
      <div className="p-8 flex flex-col gap-4 bg-gray-100 rounded-lg shadow-md m-4 mb-6 md:w-1/3 justify-center items-center">
        <h2 className="text-2xl font-semibold">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className='flex justify-between items-center'>
            <label htmlFor="name" className="text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="password" className="text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="schoolName" className="text-gray-700">
              School Name:
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
              placeholder="Enter your school name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Register
          </button>
        </form>
        <Link href="/login" className="text-blue-500 hover:underline focus:outline-none">
          Already have an account? Login
        </Link>
      </div>
    </div>

  );
};

export default Register;
