import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function Signup({ isDark }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_SERVER_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowModal(true);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const bgClass = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const inputClass = isDark
    ? 'bg-gray-700 text-white'
    : 'bg-gray-100 text-gray-900';

  return (
    <div className={`rounded-xl flex items-center justify-center ${bgClass}`}>
      <form onSubmit={handleSignup} className='w-full max-w-md p-8 space-y-4'>
        <h2 className='text-2xl font-bold'>Sign Up</h2>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className={`w-full p-2 border rounded-md border-teal-950 ${inputClass}`}
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className={`w-full mb-4 p-2 border rounded-md border-teal-950 ${inputClass}`}
          required
        />
        <button
          type='submit'
          className='w-full bg-teal-600  text-white py-2 rounded-full hover:bg-teal-600 transition-colors'
        >
          Sign Up
        </button>
        <div className='mt-4 text-center'>
          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Already have an account?{' '}
          </span>
          <Link to='/login' className='text-teal-500 hover:underline'>
            Log In
          </Link>
        </div>
      </form>
      {showModal && (
        <Modal
          message='Signup successful!'
          onClose={() => {
            setShowModal(false);
            navigate('/login');
          }}
        />
      )}
    </div>
  );
}
