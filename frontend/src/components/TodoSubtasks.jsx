import { CheckCircle, Circle, Trash2 } from 'lucide-react';

export default function TodoSubtasks({
  subtasks = [],
  onToggleSubtask,
  onDeleteSubtask,
  //   isDark,
}) {
  return (
    <div className='mt-4 mb-2'>
      {subtasks.map((subtask) => (
        <div key={subtask.id} className='flex items-center gap-2'>
          <button
            onClick={() => onToggleSubtask(subtask.id)}
            className='text-gray-400 hover:text-teal-500 transition-colors'
          >
            {subtask.completed ? (
              <CheckCircle className='text-teal-500' size={16} />
            ) : (
              <Circle size={16} />
            )}
          </button>
          <span
            className={`flex-1 text-sm mb-2 ${
              subtask.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {subtask.text}
          </span>
          <button
            onClick={() => onDeleteSubtask(subtask.id)}
            className='text-gray-500 hover:text-rose-500 transition-colors'
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
