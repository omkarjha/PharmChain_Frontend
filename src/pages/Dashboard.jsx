import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Users', value: '1,234' },
    { label: 'Active Orders', value: '56' },
    { label: 'Total Products', value: '1,234' },
    { label: 'Supply Chain Partners', value: '78' }
  ];
  
  const recentActivity = [
    { action: 'New Order Placed', time: '2 minutes ago', status: 'pending' },
    { action: 'Inventory Updated', time: '14 minutes ago', status: 'pending' },
    { action: 'Order Delivered', time: '2 hours ago', status: 'pending' }
  ];
  
  const handleLogout = () => {
    // Remove authentication token from localStorage
    localStorage.removeItem('authToken');
    
    // Redirect to login page
    navigate('/login');
  };
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin</h1>
            <p className="text-gray-600">0x123456789abab</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;