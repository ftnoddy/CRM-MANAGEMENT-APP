// App.js
import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crm from './components/crm';
import Customer from './components/customar';
import Orders from './components/orders';
import Reports from './components/reports';
import Home from './components/crmHome';
import Login from './components/Modals/login';
import Signup from './components/Modals/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-background text-primary-foreground">
        <Crm />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
