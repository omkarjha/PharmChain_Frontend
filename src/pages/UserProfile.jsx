import React, { useState } from 'react';
import { User, Lock, Wallet } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    // TODO: Implement actual password change logic
    toast.success('Password updated successfully');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md">
          {/* Profile Header */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h1 className="text-2xl font-bold">John Smith</h1>
            <p className="text-gray-500">Manufacturer</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 ${activeTab === 'profile' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Profile Details
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 ${activeTab === 'security' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Security
            </button>
          </div>

          {/* Profile Details Tab */}
          {activeTab === 'profile' && (
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <User className="mr-2" /> Profile Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        value="John Smith" 
                        className="mt-1 block w-full border rounded-md px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        value="john@example.com" 
                        className="mt-1 block w-full border rounded-md px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Role</label>
                      <input 
                        type="text" 
                        value="Manufacturer" 
                        className="mt-1 block w-full border rounded-md px-3 py-2"
                        disabled
                      />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Edit Profile
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <Wallet className="mr-2" /> Wallet Management
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Connected Wallet</label>
                      <input 
                        type="text" 
                        value="0x742d35Cc6634C0532925a3b844Bc" 
                        className="mt-1 block w-full border rounded-md px-3 py-2"
                        disabled
                      />
                    </div>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                      Connect Different Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Lock className="mr-2" /> Change Password
              </h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input 
                    type="password" 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input 
                    type="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
                <button 
                  onClick={handlePasswordChange}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;