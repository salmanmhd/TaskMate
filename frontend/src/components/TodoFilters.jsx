import { useState } from 'react';

export default function TodoFilters({ filters, onFilterChange, isDark }) {
  const [status, setStatus] = useState(filters.status);
  const [priority, setPriority] = useState(filters.priority);
  const [category, setCategory] = useState(filters.category);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onFilterChange({ ...filters, status: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    onFilterChange({ ...filters, priority: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ ...filters, category: e.target.value });
  };

  const bgClass = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const inputClass = isDark
    ? 'bg-gray-700 text-white border-gray-600'
    : 'bg-gray-100 text-gray-900 border-gray-300';

  return (
    <div className={`p-4 rounded-lg shadow-md ${bgClass}`}>
      <h3 className='text-lg font-semibold mb-2'>Filter Tasks</h3>
      <div className='flex flex-col space-y-3'>
        <select
          value={status}
          onChange={handleStatusChange}
          className={`p-2 rounded border ${inputClass}`}
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
        <select
          value={priority}
          onChange={handlePriorityChange}
          className={`p-2 rounded border ${inputClass}`}
        >
          <option value='all'>All Priorities</option>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
        <input
          type='text'
          value={category}
          onChange={handleCategoryChange}
          placeholder='Category'
          className={`p-2 rounded border ${inputClass}`}
        />
      </div>
    </div>
  );
}
