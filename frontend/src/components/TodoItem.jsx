import { Trash2, CheckCircle, Circle, Tag, Plus } from 'lucide-react';
import TodoSubtasks from './TodoSubtasks';
import { useState } from 'react';
import SubtaskProgress from './SubtaskProgress';
import TodoNotes from './TodoNotes';

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
  isDark,
  disableSubtasks,
}) {
  const [newSubtask, setNewSubtask] = useState('');

  const priorityColors = {
    low: 'from-emerald-500/20 to-emerald-600/20 text-emerald-500',
    medium: 'from-amber-500/20 to-amber-600/20 text-amber-500',
    high: 'from-rose-500/20 to-rose-600/20 text-rose-500',
  };

  const addSubtask = (e) => {
    if (disableSubtasks) return;
    if (e.key === 'Enter' && newSubtask.trim()) {
      const subtasks = [
        ...(todo.subtasks || []),
        {
          id: crypto.randomUUID(),
          text: newSubtask.trim(),
          completed: false,
        },
      ];
      onUpdate(todo._id, { subtasks });
      setNewSubtask('');
    }
  };

  const onToggleSubtask = (subtaskId) => {
    if (disableSubtasks) return;
    const updatedSubtasks = todo.subtasks.map((subtask) =>
      subtask.id === subtaskId
        ? { ...subtask, completed: !subtask.completed }
        : subtask
    );
    onUpdate(todo._id, { subtasks: updatedSubtasks });
  };

  const onDeleteSubtask = (subtaskId) => {
    if (disableSubtasks) return;
    const updatedSubtasks = todo.subtasks.filter(
      (subtask) => subtask.id !== subtaskId
    );
    onUpdate(todo._id, { subtasks: updatedSubtasks });
  };

  const bgClass = isDark
    ? 'bg-gray-900/90 border-gray-600/30'
    : 'bg-white/90 border-gray-200/50';

  const fadeClass = todo.completed ? 'opacity-50' : 'opacity-100';

  return (
    <div className='group'>
      <div
        className={`relative overflow-hidden p-4 ${bgClass} ${fadeClass} backdrop-blur-sm rounded-lg mb-2 transition-all duration-300 border shadow-lg hover:shadow-xl`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            priorityColors[todo.priority]
          } opacity-20 pointer-events-none`}
        />
        <div className='relative flex items-center justify-between mb-4'>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => onToggle(todo._id)}
              className='text-gray-400 hover:text-teal-500 transition-colors'
            >
              {todo.completed ? (
                <CheckCircle className='text-teal-500' size={24} />
              ) : (
                <Circle size={24} />
              )}
            </button>
            <div className='flex flex-col'>
              <span
                className={`text-lg ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.title}
              </span>
              <div className='flex items-center gap-2 text-sm'>
                <Tag
                  size={14}
                  className={isDark ? 'text-gray-400' : 'text-gray-500'}
                />
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                  {todo.category}
                </span>
                <span
                  className={`ml-2 font-medium ${
                    priorityColors[todo.priority]
                  }`}
                >
                  {todo.priority.charAt(0).toUpperCase() +
                    todo.priority.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(todo._id)}
            className='text-gray-500 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity'
          >
            <Trash2 size={20} />
          </button>
        </div>

        {todo.subtasks && todo.subtasks.length > 0 && (
          <SubtaskProgress subtasks={todo.subtasks} />
        )}

        <TodoSubtasks
          subtasks={todo.subtasks}
          onToggleSubtask={onToggleSubtask}
          onDeleteSubtask={onDeleteSubtask}
          isDark={isDark}
          disableSubtasks={disableSubtasks}
        />

        <div className='relative flex items-center gap-2 z-10'>
          <Plus
            size={14}
            className={isDark ? 'text-gray-400' : 'text-gray-500'}
          />
          <input
            type='text'
            value={newSubtask}
            onChange={(e) => setNewSubtask(e.target.value)}
            onKeyPress={addSubtask}
            placeholder='Add subtask...'
            className={`bg-transparent text-sm focus:outline-none ${
              isDark
                ? 'text-gray-300 placeholder-gray-500'
                : 'text-gray-700 placeholder-gray-400'
            } z-10`}
          />
        </div>

        <TodoNotes
          notes={todo.notes}
          onUpdateNotes={(newNotes) => onUpdate(todo._id, { notes: newNotes })}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
