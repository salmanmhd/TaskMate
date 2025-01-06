import { CheckSquare, Sun, Moon } from 'lucide-react';

export default function Header({ isDark, onThemeToggle }) {
  const bgClass = isDark
    ? 'bg-gray-800/90 border-gray-700/30'
    : 'bg-white/90 border-gray-200/50';

  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full ${bgClass} backdrop-blur-sm p-8 mb-8 border shadow-lg`}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10' />
      <div className='relative flex items-center justify-between'>
        <div className='flex items-end  gap-3'>
          <CheckSquare size={50} className='text-teal-500' />
          <h1 className='text-3xl font-bold'>Task Mate</h1>
        </div>
        <button
          onClick={onThemeToggle}
          className={`p-2 rounded-lg transition-colors ${
            isDark
              ? 'bg-gray-700/50 hover:bg-gray-600/50'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {isDark ? (
            <Sun size={20} className='text-teal-500' />
          ) : (
            <Moon size={20} className='text-teal-600' />
          )}
        </button>
      </div>
      <div className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Plan your tasks and get things done
      </div>
    </div>
  );
}
