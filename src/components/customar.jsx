// Customer.js
import React, { useState } from 'react';

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editIndex] = { name: customerName, email: customerEmail, phone: customerPhone };
      setCustomers(updatedCustomers);
      setEditIndex(null);
    } else {
      setCustomers([...customers, { name: customerName, email: customerEmail, phone: customerPhone }]);
    }
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
  };

  const handleEditCustomer = (index) => {
    setCustomerName(customers[index].name);
    setCustomerEmail(customers[index].email);
    setCustomerPhone(customers[index].phone);
    setEditIndex(index);
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <section className="mb-8 bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer, index) => (
          <div key={index} className="bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{customer.name}</h3>
            <p className="text-sm mb-2">Email: {customer.email}</p>
            <p className="text-sm mb-2">Phone: {customer.phone}</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleEditCustomer(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCustomer(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{editIndex !== null ? 'Edit Customer' : 'Add Customer'}</h3>
          <form onSubmit={handleAddCustomer}>
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 text-gray-200 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 text-gray-200 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 text-gray-200 rounded-md"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-md">
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
