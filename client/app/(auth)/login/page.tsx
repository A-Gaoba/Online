"use client"

import React, { useState } from 'react';
import Link from 'next/link';

interface LoginProps {
  toggleForm: () => void;
}

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ toggleForm }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData); 
  };

  return (
    <div className='flex justify-center items-center bg-[#e9edc9] px-6 lg:px-16 py-4 rounded-3xl mb-10 '>
      <div className="p-8 flex flex-col gap-4 bg-gray-100 rounded-lg shadow-md m-4 mb-6 w-1/3 justify-center items-center">
        <h2 className="text-2xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className='flex justify-between items-center'>
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <Link href="/register" className="text-blue-500 hover:underline focus:outline-none">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
