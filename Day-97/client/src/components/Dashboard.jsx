import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/auth/profile');
        setUser(data);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20">
      <div className="bg-white p-8 rounded shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
        {user ? (
          <div>
            <p className="text-lg mb-2">Welcome, <span className="font-semibold">{user.name}</span>!</p>
            <p className="text-gray-600 mb-6">{user.email}</p>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
