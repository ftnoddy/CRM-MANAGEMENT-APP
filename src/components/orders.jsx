// Orders.js
import React, { useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [cakeType, setCakeType] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerDOB, setCustomerDOB] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [address, setAddress] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [orderTotal, setOrderTotal] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedOrders = [...orders];
      updatedOrders[editIndex] = {
        id: orders[editIndex].id,
        cakeType,
        customerName,
        customerDOB,
        orderDate,
        deliveryDate,
        address,
        whatsApp,
        total: orderTotal,
      };
      setOrders(updatedOrders);
      setEditIndex(null);
    } else {
      const newOrder = {
        id: `ORD-${Date.now()}`,
        cakeType,
        customerName,
        customerDOB,
        orderDate,
        deliveryDate,
        address,
        whatsApp,
        total: orderTotal,
      };
      setOrders([...orders, newOrder]);
    }
    setCakeType('');
    setCustomerName('');
    setCustomerDOB('');
    setOrderDate('');
    setDeliveryDate('');
    setAddress('');
    setWhatsApp('');
    setOrderTotal('');
  };

  const handleEditOrder = (index) => {
    setCakeType(orders[index].cakeType);
    setCustomerName(orders[index].customerName);
    setCustomerDOB(orders[index].customerDOB);
    setOrderDate(orders[index].orderDate);
    setDeliveryDate(orders[index].deliveryDate);
    setAddress(orders[index].address);
    setWhatsApp(orders[index].whatsApp);
    setOrderTotal(orders[index].total);
    setEditIndex(index);
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <section className="mb-8 bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order, index) => (
          <div key={order.id} className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Order #{order.id}</h3>
            <p className="text-sm mb-2">Cake Type: {order.cakeType}</p>
            <p className="text-sm mb-2">Customer Name: {order.customerName}</p>
            <p className="text-sm mb-2">DOB: {order.customerDOB}</p>
            <p className="text-sm mb-2">Order Date: {order.orderDate}</p>
            <p className="text-sm mb-2">Delivery Date: {order.deliveryDate}</p>
            <p className="text-sm mb-2">Address: {order.address}</p>
            <p className="text-sm mb-2">WhatsApp: {order.whatsApp}</p>
            <p className="text-sm mb-2">Total: ${order.total}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleEditOrder(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteOrder(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md col-span-full">
          <h3 className="text-lg font-semibold mb-4">{editIndex !== null ? 'Edit Order' : 'Add Order'}</h3>
          <form onSubmit={handleAddOrder} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={cakeType}
                onChange={(e) => setCakeType(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              >
                <option value="">Select Cake Type</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Red Velvet">Red Velvet</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Black Forest">Black Forest</option>
              </select>
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <input
                type="date"
                placeholder="Customer DOB"
                value={customerDOB}
                onChange={(e) => setCustomerDOB(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <input
                type="date"
                placeholder="Order Date"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <input
                type="date"
                placeholder="Delivery Date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <textarea
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <input
                type="tel"
                placeholder="WhatsApp Number"
                value={whatsApp}
                onChange={(e) => setWhatsApp(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Total"
                value={orderTotal}
                onChange={(e) => setOrderTotal(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
                required
              />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md">
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
