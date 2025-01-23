import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchInventory } from '../services/api';
import Sidebar from '../components/Sidebar';

const Inventory = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const data = await fetchInventory();
      setInventory(data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load inventory');
      setLoading(false);
    }
  };
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <button
            onClick={() => navigate('/update-inventory')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Update Inventory
          </button>
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventory.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-4">{item.name}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Inventory Level</span>
                      <span>{item.level} units</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-full rounded-full ${item.level < item.threshold ? 'bg-red-500' : 'bg-green-500'
                          }`}
                        style={{ width: `${(item.level / item.threshold) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Threshold</span>
                    <span className="font-medium">{item.threshold} units</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Updated</span>
                    <span className="font-medium">{item.lastUpdated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;