import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password, role });
      const data = response.data;
      // Redirect based on role
      if (data.role === 'STUDENT') {
        window.location.href = '/student-dashboard';
      } else if (data.role === 'FACULTY_MEMBER') {
        window.location.href = '/faculty-dashboard';
      } else if (data.role === 'ADMINISTRATOR') {
        window.location.href = '/admin-dashboard';
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm">Username:</label>
          <input type="text" className="w-full border p-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Password:</label>
          <input type="password" className="w-full border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Role:</label>
          <select className="w-full border p-2" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="STUDENT">Student</option>
            <option value="FACULTY_MEMBER">Faculty Member</option>
            <option value="ADMINISTRATOR">Administrator</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Login;
