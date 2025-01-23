import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import VerifyMedicine from './pages/VerifyMedicine';
import RegisterMedicine from './pages/RegisterMedicine';
import UpdateStatus from './pages/UpdateStatus';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Users from './pages/Users';
import AddUser from './pages/adduser';
import UserProfile from './pages/UserProfile';
import UpdateInventory from './pages/UpdateInventory';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verify-medicine" element={<VerifyMedicine />} />
          <Route path="/register-medicine" element={<RegisterMedicine />} />
          <Route path="/update-status" element={<UpdateStatus />} />
          <Route path="/orders" element ={<Orders />} />
          <Route path="/inventory" element ={<Inventory />} />
          <Route path="/users" element ={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/update-inventory" element={<UpdateInventory />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;