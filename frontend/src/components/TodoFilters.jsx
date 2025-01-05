import { Filter } from 'lucide-react';

export default function TodoFiltersComponent({ filters, onFilterChange }) {
  return (
    <div className='flex items-center gap-4 mb-6 bg-gray-800 p-4 rounded-lg'>
      <Filter size={20} className='text-purple-500' />
      <select
        value={filters.status}
        onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
        className='bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-gray-100'
      >
        <option value='all'>All</option>
        <option value='active'>Active</option>
        <option value='completed'>Completed</option>
      </select>
      <select
        value={filters.priority}
        onChange={(e) =>
          onFilterChange({ ...filters, priority: e.target.value })
        }
        className='bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-gray-100'
      >
        <option value='all'>All Priorities</option>
        <option value='low'>Low Priority</option>
        <option value='medium'>Medium Priority</option>
        <option value='high'>High Priority</option>
      </select>
      <select
        value={filters.category}
        onChange={(e) =>
          onFilterChange({ ...filters, category: e.target.value })
        }
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
