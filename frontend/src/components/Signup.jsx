import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function Signup({ isDark = true }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const payload = { username, password };
      console.log('Signup payload:', payload);
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        setShowModal(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error signing up', error);
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
        onSubmit={handleSignup}
        className={`${formClass} p-8 rounded-lg shadow-lg w-80`}
      >
        <h2 className={`text-2xl font-bold mb-6 text-center ${textClass}`}>
          Sign Up
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
          Sign Up
        </button>
        <div className='mt-4 text-center'>
          <span className={textClass}>Already have an account? </span>
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
