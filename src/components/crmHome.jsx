// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  // Dummy data for total customers and orders
  const totalCustomers = 50;
  const totalOrders = 100;

  // Dummy data for bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 3, 5, 2, 3, 9, 12, 15, 8, 6, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Customers',
        data: [10, 15, 2, 4, 1, 2, 7, 10, 13, 6, 5, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="bg-gray-800 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">CRM Dashboard</h1>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold">Total Customers</h2>
            <p className="text-5xl font-bold">{totalCustomers}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold">Total Orders</h2>
            <p className="text-5xl font-bold">{totalOrders}</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Order & Customer Statistics</h2>
          <Bar data={data} options={{
            responsive: true,
            plugins: { legend: { position: 'top' }, title: { display: true, text: 'Orders and Customers Over Time' } }
          }}/>
        </div>
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        <Link to="/customer" className="text-blue-500 hover:text-blue-400 mx-4">Manage Customers</Link>
        <Link to="/orders" className="text-blue-500 hover:text-blue-400 mx-4">Manage Orders</Link>
        <Link to="/reports" className="text-blue-500 hover:text-blue-400 mx-4">View Reports</Link>
      </footer>
    </div>
  );
}
