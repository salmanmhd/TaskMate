import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ isDark }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_SERVER_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error logging in. Please try again later.');
    }
  };

  const bgClass = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const inputClass = isDark
    ? 'bg-gray-700 text-white'
    : 'bg-gray-100 text-gray-900';

  return (
    <div className={`flex items-center justify-center rounded-xl ${bgClass}`}>
      <form onSubmit={handleLogin} className='w-full max-w-md p-8 space-y-4'>
        <h2 className='text-2xl font-bold'>Log In</h2>
        {errorMessage && (
          <div className='text-red-500 text-sm mb-4'>{errorMessage}</div>
        )}
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className={`w-full p-2 border border-teal-950 rounded-md ${inputClass}`}
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className={`w-full mb-4 p-2 border border-teal-950 rounded-md ${inputClass}`}
          required
        />
        <button
          type='submit'
          className='w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition-colors'
        >
          Log In
        </button>
        <div className='mt-4 text-center'>
          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Don&apos;t have an account?{' '}
          </span>
          <Link to='/signup' className='text-teal-500 hover:underline'>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
