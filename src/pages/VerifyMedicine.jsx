import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';

const VerifyMedicine = () => {
  const [medicineId, setMedicineId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    
    if (!medicineId) {
      toast.error('Please enter a Medicine ID');
      return;
    }

    // Simulate verification process
    const mockVerification = {
      isAuthentic: medicineId.length > 5,
      manufacturer: 'Pharma Inc.',
      batchNumber: medicineId,
      manufacturingDate: '2024-01-15',
      expiryDate: '2025-01-15'
    };

    if (mockVerification.isAuthentic) {
      toast.success('Medicine verified successfully');
      setVerificationResult(mockVerification);
    } else {
      toast.error('Medicine verification failed');
      setVerificationResult(null);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Verify Medicine</h1>
        
        <form onSubmit={handleVerify} className="max-w-md bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Medicine ID</label>
            <input
              type="text"
              value={medicineId}
              onChange={(e) => setMedicineId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Medicine ID"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Verify
          </button>
          
          {verificationResult && (
            <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-md">
              <h3 className="font-bold mb-2 text-green-800">Verification Details</h3>
              <p><strong>Manufacturer:</strong> {verificationResult.manufacturer}</p>
              <p><strong>Batch Number:</strong> {verificationResult.batchNumber}</p>
              <p><strong>Manufacturing Date:</strong> {verificationResult.manufacturingDate}</p>
              <p><strong>Expiry Date:</strong> {verificationResult.expiryDate}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyMedicine;