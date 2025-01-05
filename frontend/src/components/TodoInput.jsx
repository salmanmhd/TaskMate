import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function TodoInput({ onAdd, isDark }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, priority, category);
      setTitle('');
      setPriority('medium');
      setCategory('personal');
    }
  };

  const inputClasses = isDark
    ? 'bg-gray-800/80 border-gray-700/50 text-gray-100 placeholder-gray-400'
    : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500';

  const selectClasses = isDark
    ? 'bg-gray-800/80 border-gray-700/50 text-gray-100'
    : 'bg-white/80 border-gray-200 text-gray-900';

  return (
    <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
      <div className='flex gap-4'>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Add a new task...'
          className={`flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500/50 ${inputClasses}`}
        />
        <button
          type='submit'
          className='bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-teal-500/20'
        >
          <PlusCircle size={20} />
          Add Task
        </button>
      </div>
      <div className='flex gap-4'>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`border rounded-lg px-4 py-2 ${selectClasses}`}
        >
          <option value='low'>Low Priority</option>
          <option value='medium'>Medium Priority</option>
          <option value='high'>High Priority</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`border rounded-lg px-4 py-2 ${selectClasses}`}
        >
          <option value='personal'>Personal</option>
          <option value='work'>Work</option>
          <option value='shopping'>Shopping</option>
          <option value='health'>Health</option>
        </select>
      </div>
    </form>
  );
}
