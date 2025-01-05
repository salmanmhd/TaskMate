import { useMemo } from 'react';

export default function SubtaskProgress({ subtasks }) {
  const { completedCount, totalCount, percentage } = useMemo(() => {
    const completedCount = subtasks.filter(
      (subtask) => subtask.completed
    ).length;
    const totalCount = subtasks.length;
    const percentage =
      totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
    return { completedCount, totalCount, percentage };
  }, [subtasks]);

  return (
    <div className='mt-2'>
      <div className='flex items-center justify-between text-sm'>
        <span className='text-gray-500 mb-2'>
          {completedCount} of {totalCount} subtasks completed
        </span>
        <span className='text-gray-500'>{percentage}%</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div
          className='bg-teal-500 h-2.5 rounded-full'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
