export const fetchOrders = async () => {
  // Simulate API call
  return [
    { id: 1, product: 'Paracetamol', batchNo: 'PCM20240201', quantity: 1000, origin: 'Manufacturer A', destination: 'Distributor B', status: 'Processing' },
    { id: 2, product: 'Amoxicillin', batchNo: 'AMX20240507', quantity: 500, origin: 'Distributor A', destination: 'Customer B', status: 'withDistributor' },
    { id: 3, product: 'Ibuprofen', batchNo: 'IBF20240601', quantity: 890, origin: 'Wholesaler A', destination: 'Supplier B', status: 'Created' }
  ];
};

export const fetchInventory = async () => {
  return [
    { id: 1, name: 'Paracetamol 500mg', level: 50, threshold: 100, lastUpdated: '2024-01-20' },
    { id: 2, name: 'Amoxicillin 250mg', level: 40, threshold: 60, lastUpdated: '2024-01-21' },
    { id: 3, name: 'Ibuprofen 400mg', level: 25, threshold: 60, lastUpdated: '2024-01-22' }
  ];
};
export const updateInventoryItem = async (itemId, newLevel) => {
  try {
    const response = await axios.patch(`/api/inventory/${itemId}`, { level: newLevel });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update inventory item');
  }
};

export const fetchUsers = async () => {
  return [
    { id: 1, name: 'John Doe', role: 'Manufacturer', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Distributor', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Bob Wilson', role: 'Admin', email: 'bob@example.com', status: 'Inactive' }
  ];
};