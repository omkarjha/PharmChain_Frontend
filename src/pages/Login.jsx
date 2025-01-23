import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate a successful login
      if (formData.username && formData.password) {
        // Sample validation
        if (formData.username === 'admin' && formData.password === 'password') {
          login({
            username: formData.username,
            role: 'admin',
            walletAddress: '0x123456789abab'
          });
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Login to Pharma Chain</h2>
        <p className="text-gray-600 text-center mb-8">Enter your credentials to access the system</p>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;