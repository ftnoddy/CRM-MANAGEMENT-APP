import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-white mb-4 text-center">Welcome Admin!</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-300 mt-4 text-center">
          Don't have an account yet? <Link to="/signup" className="text-green-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
