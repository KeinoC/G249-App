import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your Flask API URL

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState({ name: '', password: '' });

  useEffect(() => {
    const getToken = async () => {
      const res = await axios.post(`${API_URL}/login`, {
        name: 'your_username',
        password: 'your_password'
      });
      setToken(res.data.token);
    };
    getToken();
  }, []);

  const handleNewUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async () => {
    await axios.post(`${API_URL}/user`, newUser, {
      headers: { 'x-access-token': token }
    });
  };

  const handleGetUser = async (publicId) => {
    const res = await axios.get(`${API_URL}/user/${publicId}`, {
      headers: { 'x-access-token': token }
    });
    setUser(res.data.user);
  };

  const handlePromoteUser = async (publicId) => {
    await axios.put(`${API_URL}/user/${publicId}`, {}, {
      headers: { 'x-access-token': token }
    });
  };

  const handleDeleteUser = async (publicId) => {
    await axios.delete(`${API_URL}/user/${publicId}`, {
      headers: { 'x-access-token': token }
    });
  };

  return (
<></>
  )
}