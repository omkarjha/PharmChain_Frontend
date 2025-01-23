import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📦', label: 'Orders', path: '/orders' },
    { icon: '📋', label: 'Inventory', path: '/inventory' },
    { icon: '👥', label: 'Users', path: '/users' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-md">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">PharmaChain</h1>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 hover:bg-gray-100 ${
              location.pathname === item.path ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-700'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;