import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function TodoFilters({ filters, onFilterChange }) {
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

  return (
    <div className='flex items-center gap-4 mb-6 bg-gray-800 p-4 rounded-lg'>
      <Filter size={20} className='text-purple-500' />
      <select
        value={status}
        onChange={handleStatusChange}
        className='bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-gray-100'
      >
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='pending'>Pending</option>
      </select>
      <select
        value={priority}
        onChange={handlePriorityChange}
        className='bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-gray-100'
      >
        <option value='all'>All Priorities</option>
        <option value='high'>High</option>
        <option value='medium'>Medium</option>
        <option value='low'>Low</option>
      </select>
      <select
        value={category}
        onChange={handleCategoryChange}
        className='bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-gray-100'
      >
        <option value=''>All Categories</option>
        <option value='personal'>Personal</option>
        <option value='work'>Work</option>
        <option value='shopping'>Shopping</option>
        <option value='health'>Health</option>
      </select>
    </div>
  );
}
