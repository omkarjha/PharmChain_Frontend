import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';

const UpdateStatus = () => {
  const [formData, setFormData] = useState({
    medicineId: '',
    newLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.medicineId || !formData.newLocation) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate status update
    toast.success('Medicine status updated successfully');
    console.log('Updated Medicine Status:', formData);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Update Supply Chain Status</h1>
        
        <form onSubmit={handleSubmit} className="max-w-md bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Medicine ID</label>
            <input
              type="text"
              name="medicineId"
              value={formData.medicineId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Medicine ID"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">New Location</label>
            <input
              type="text"
              name="newLocation"
              value={formData.newLocation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter new supply chain location"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Update Status
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatus;