// Crm.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, ClipboardListIcon, ChartPieIcon, UserCircleIcon } from '@heroicons/react/solid'; // Use /solid for Heroicons v2

export default function Crm() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 p-4 border-r border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">CRM Dashboard</h1>
        <Link to="/profile">
          <UserCircleIcon className="h-8 w-8 text-white" />
        </Link>
      </div>
      <nav>
        <ul>
          <li className="mb-2 border-b border-gray-600">
            <Link
              to="/"
              className="flex items-center justify-start w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-sm rounded-lg"
            >
              <HomeIcon className="h-5 w-5 mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-2 border-b border-gray-600">
            <Link
              to="/customer"
              className="flex items-center justify-start w-full bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-sm rounded-lg"
            >
              <UserIcon className="h-5 w-5 mr-2" /> Customer
            </Link>
          </li>
          <li className="mb-2 border-b border-gray-600">
            <Link
              to="/orders"
              className="flex items-center justify-start w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 text-sm rounded-lg"
            >
              <ClipboardListIcon className="h-5 w-5 mr-2" /> Orders
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/reports"
              className="flex items-center justify-start w-full bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-sm rounded-lg"
            >
              <ChartPieIcon className="h-5 w-5 mr-2" /> Reports
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <Link
          to="/login"
          className="block text-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 text-sm rounded-lg mb-2"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block text-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 text-sm rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </aside>
  );
}
