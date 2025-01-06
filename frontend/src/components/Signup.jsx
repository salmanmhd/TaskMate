import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function Signup({ isDark }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_SERVER_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters long.');
      return;
    }
    try {
      const response = await fetch(`${URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowModal(true);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Error signing up. Please try again later.');
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
        {errorMessage && (
          <div className='text-red-500 text-sm mb-4'>{errorMessage}</div>
        )}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className={`w-full p-2 border rounded-md border-teal-950 ${inputClass}`}
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password (min 5 characters)'
          className={`w-full mb-4 p-2 border rounded-md border-teal-950 ${inputClass}`}
          required
        />
        <button
          type='submit'
          className='w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-600 transition-colors'
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
