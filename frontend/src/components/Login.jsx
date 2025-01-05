import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ isDark = true }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error logging in', error);
    }
  };

  const formClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const inputClass = isDark
    ? 'bg-gray-700 text-white border-gray-600'
    : 'bg-white text-gray-900 border-gray-300';

  return (
    <div className='flex justify-center items-center mt-32'>
      <form
        onSubmit={handleLogin}
        className={`${formClass} p-8 rounded-lg shadow-lg w-80`}
      >
        <h2 className={`text-2xl font-bold mb-6 text-center ${textClass}`}>
          Login
        </h2>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className={`w-full mb-4 p-2 border rounded ${inputClass}`}
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className={`w-full mb-4 p-2 border rounded ${inputClass}`}
          required
        />
        <button
          type='submit'
          className='w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors'
        >
          Log In
        </button>
        <div className='mt-4 text-center'>
          <span className={textClass}>Don&apos;t have an account? </span>
          <Link to='/signup' className='text-teal-500 hover:underline'>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
