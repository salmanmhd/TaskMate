import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

export default function UserProfile() {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5000/user', {
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='absolute border border-gray-600 py-2 px-4 rounded-full top-4 right-4 z-50'>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className='flex items-center gap-2 text-white'
      >
        <User size={24} />
        <span>{username}</span>
      </button>
      {showDropdown && (
        <div className='absolute right-0 mt-3   rounded-md shadow-lg'>
          <button
            onClick={handleLogout}
            className='flex items-center gap-2 w-full rounded-full mt-1 bg-gray-400 px-4 py-2 text-left text-gray-900 hover:bg-gray-200 transition-colors'
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
