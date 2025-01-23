import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';

const RegisterMedicine = () => {
  const [formData, setFormData] = useState({
    medicineName: '',
    batchNumber: '',
    manufacturingDate: '',
    expiryDate: '',
    manufacturer: ''
  });
  const [verifyMedicineId, setVerifyMedicineId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.medicineName || !formData.batchNumber) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Medicine registered successfully');
    console.log('Registered Medicine:', formData);
  };

  const handleVerify = () => {
    // Simulate medicine verification
    if (verifyMedicineId) {
      toast.success('Medicine verified successfully');
    } else {
      toast.error('Please enter a valid Medicine ID');
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Register New Medicine</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Medicine Name</label>
              <input
                type="text"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Batch Number</label>
              <input
                type="text"
                name="batchNumber"
                value={formData.batchNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Manufacturing Date</label>
              <input
                type="date"
                name="manufacturingDate"
                value={formData.manufacturingDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Manufacturer</label>
            <input
              type="text"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Register Medicine
            </button>
          </div>
        </form>
        <div className="mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Verify Medicine</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Medicine ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mr-4"
              value={verifyMedicineId}
              onChange={(e) => setVerifyMedicineId(e.target.value)}
            />
            <button
              onClick={handleVerify}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMedicine;