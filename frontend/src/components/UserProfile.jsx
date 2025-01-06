import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

export default function UserProfile({ isDark }) {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (isAuthenticated) {
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
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!isAuthenticated) return null;

  const bgClass = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const dropdownBgClass = isDark ? 'bg-gray-700' : 'bg-gray-100';
  const textClass = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`absolute top-4 right-4 z-50 ${bgClass} p-4 rounded-full shadow-lg`}
    >
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`flex items-center gap-2 ${textClass}`}
      >
        <User size={24} />
        <span>{username}</span>
      </button>
      {showDropdown && (
        <div
          className={`absolute right-0 mt-3 w-48 ${dropdownBgClass} rounded-md shadow-lg`}
        >
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left ${textClass} hover:bg-gray-200 transition-colors transform hover:scale-105`}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
