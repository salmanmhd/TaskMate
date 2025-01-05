// import React from 'react';
import { PieChart, CheckCircle2, Clock } from 'lucide-react';

export default function TodoStats({ todos }) {
  const completed = todos.filter((t) => t.completed).length;
  const total = todos.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className='mt-6 bg-gradient-to-r from-gray-800/80 to-gray-800/60 rounded-lg p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <PieChart size={20} className='text-purple-400' />
          <span className='text-gray-300'>Progress</span>
        </div>
        <span className='text-2xl font-bold text-purple-400'>
          {percentage}%
        </span>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-4'>
        <div className='flex items-center gap-2'>
          <CheckCircle2 size={16} className='text-green-400' />
          <span className='text-gray-400'>{completed} completed</span>
        </div>
        <div className='flex items-center gap-2'>
          <Clock size={16} className='text-yellow-400' />
          <span className='text-gray-400'>{total - completed} remaining</span>
        </div>
      </div>
    </div>
  );
}
