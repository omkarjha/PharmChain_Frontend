import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchInventory, updateInventoryItem } from '../services/api';
import Sidebar from '../components/Sidebar';
// import Inventory from './Inventory';

const UpdateInventory = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedItems, setEditedItems] = useState({});

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

  const handleQuantityChange = (itemId, newQuantity) => {
    setEditedItems(prev => ({
      ...prev,
      [itemId]: {
        ...inventory.find(item => item.id === itemId),
        level: parseInt(newQuantity, 10)
      }
    }));
  };

  const saveInventoryUpdates = async () => {
    try {
      const updatePromises = Object.values(editedItems).map(item => 
        updateInventoryItem(item.id, item.level)
      );
      
      await Promise.all(updatePromises);
      
      toast.success('Inventory updated successfully');
      navigate('/inventory');
    } catch (error) {
      toast.error('Failed to update inventory');
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Update Inventory</h1>
          <button 
            onClick={saveInventoryUpdates}
            disabled={Object.keys(editedItems).length === 0}
            className={`px-4 py-2 rounded-md ${
              Object.keys(editedItems).length > 0
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Save Updates
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
                    <label htmlFor={`quantity-${item.id}`} className="block text-sm font-medium text-gray-700">
                      Inventory Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={editedItems[item.id]?.level ?? item.level}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      min="0"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
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

export default UpdateInventory;