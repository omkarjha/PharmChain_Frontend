import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchOrders } from '../services/api';
import Sidebar from '../components/Sidebar';

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await fetchOrders();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to load orders');
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => 
    order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.batchNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMedicine = () => {
    navigate('/register-medicine');
  };

  const getStatusColor = (status) => {
    const colors = {
      Processing: 'bg-yellow-100 text-yellow-800',
      withDistributor: 'bg-blue-100 text-blue-800',
      Created: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Order Management</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              onClick={handleAddMedicine}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Medicine
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Batch No.</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Origin</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destination</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{order.batchNo}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{order.origin}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{order.destination}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;