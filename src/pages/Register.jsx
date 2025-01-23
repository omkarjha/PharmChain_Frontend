import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Register for Pharma Chain</h2>
        <p className="text-gray-600 text-center mb-8">Enter your credentials to access the system</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Manufacturer</option>
              <option>Distributor</option>
              <option>Retailer</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Wallet Address</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;